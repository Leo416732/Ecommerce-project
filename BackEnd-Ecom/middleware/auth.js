import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.role;

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
