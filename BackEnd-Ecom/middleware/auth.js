import jwt from "jsonwebtoken";

const config = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token;

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Хэрэглэгчийн token оруулах шаардлагатай.",
    });
  }
  try {
    const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Хэрэглэгчийн token буруу, эсвэл идэвхигүй байна.",
    });
  }
  return next();
};

export default verifyToken;
