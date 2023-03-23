const verifyRole = (req, res, next) => {
  const role = req.body.role || req.query.role;
  console.log(req.body);

  if (role == "admin") {
    return next();
  } else {
    return res.status(403).json({
      success: false,
      message: "role буруу байна.",
    });
  }
};

export default verifyRole;
