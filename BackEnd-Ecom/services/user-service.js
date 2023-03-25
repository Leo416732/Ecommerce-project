import Users from "../model/users.js";
import bcrypt from "bcrypt";
import moment from "moment";

const date = moment().format("llll");

export async function userList() {
  return await Users.find();
}

export async function userRegister(newUser) {
  const hashedPassword = await bcrypt.hash(newUser.password, 10);
  if (hashedPassword) {
    const user = new Users({
      email: newUser.email,
      password: hashedPassword,
      name: newUser.name,
      phone: newUser.phone,
      address: newUser.address,
      role: "user",
      login_date: date,
    });
    return await user.save();
  }
}

export async function userLogin(email) {
  return await Users.findOne({ email });
}
