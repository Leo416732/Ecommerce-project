import express from "express";
import { userRegister } from "../services/user-service.js";

const users_router = express.Router();

//mongoose
users_router.post("/register", async (request, response) => {
  if (request.body.email && request.body.password) {
    const result = await userRegister(request.body);
    console.log("result:", result);
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

users_router.post("login");

export default users_router;
