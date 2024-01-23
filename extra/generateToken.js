const jwt = require("jsonwebtoken");

exports.generateToken = (userId, userRole) => {
  const token = jwt.sign({ userId, userRole }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  console.log(token);
  return token;
};
