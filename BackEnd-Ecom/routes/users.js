import express from "express";
import fs from "fs";
import { uuid } from "uuidv4";

const users_router = express.Router();

let date = new Date();
function currentDate() {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join("/");
}

// users
users_router.get("/users", (req, res) => {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let products = JSON.parse(data);
      res.status(200).json(products);
    }
  });
});
users_router.post("/user", (req, res) => {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let users = JSON.parse(data);
      let userName = req.body.userName;
      let password = req.body.password;
      let currentUser = users.find((user) => {
        return (
          (user.email == userName ||
            user.phone == userName ||
            user.name == userName) &&
          user.password === password &&
          (user.role === "user" || user.role == "admin")
        );
      });
      if (currentUser) {
        res.status(200).json(currentUser);
      } else {
        res.status(403).send("userName or password wrong");
      }
    }
  });
});
users_router.put("/users/:id", (req, res) => {
  console.log(req.body);
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let users = JSON.parse(data);
      const findData = users.find((user) => user.userId === req.params.id);
      users[users.indexOf(findData)].date = req.body.date;
      fs.writeFile("../data/users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});
users_router.put("/user/:id", (req, res) => {
  console.log(req.body);
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let users = JSON.parse(data);
      const findData = users.find((user) => user.userId === req.params.id);
      users[users.indexOf(findData)].password = req.body.password;
      fs.writeFile("./data/users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          fs.readFile("./data/users.json", (err, data) => {
            res.status(200).send(findData);
          });
        }
      });
    }
  });
});
users_router.post("/users", (req, res) => {
  fs.readFile("./data/users.json", (err, data) => {
    if (err) {
      res.status(500).send({ message: err });
    } else {
      let users = JSON.parse(data);
      users.push({
        ...req.body,
        date: currentDate(),
        userId: uuid().slice(0, 8),
        role: "user",
      });
      fs.writeFile("./data/users.json", JSON.stringify(users), (err) => {
        if (err) {
          res.status(500).send({ message: err });
        } else {
          res.status(200).send({ message: "success" });
        }
      });
    }
  });
});

export default users_router;
