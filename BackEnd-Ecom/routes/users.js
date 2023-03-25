import express from "express";
import { userList, userLogin, userRegister } from "../services/user-service.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import auth from "../middleware/auth.js";
import verifyRole from "../middleware/authorization.js";

const users_router = express.Router();

//mongoose
users_router.post("/userList", verifyRole, async (req, res) => {
  const result = await userList();
  if (result) {
    res.status(200).send({
      message: "Successfully",
      result,
    });
  } else {
    res.status(500).send({
      message: "Error",
    });
  }
});

users_router.post("/register", async (request, response) => {
  if (request.body.email && request.body.password) {
    const result = await userRegister(request.body);
    if (result) {
      response.status(201).send({
        message: "User Created Successfully",
        result,
      });
    } else {
      response.status(500).send({
        message: "Error creating user",
      });
    }
  }
});

users_router.post("/protected", auth, (req, res, next) => {
  res.status(200).json({ message: "protected", data: req.user });
});

users_router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).json({
        success: false,
        status: "Утгуудаа бүрэн оруулна уу.",
        updated: 1,
        email: email,
        password: password,
      });
      return;
    }
    const user = await userLogin(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          _id: user._id,
          email,
          name: user.name,
          phone: user.phone,
          address: user.address,
          role: user.role,
        },
        "MySuperDuperPrivateKey",
        {
          expiresIn: "2h",
        }
      );
      if (token) {
        res.status(200).json({
          success: true,
          status: "Амжилттай нэвтэрлээ.",
          data: user,
          token: token,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

export default users_router;
