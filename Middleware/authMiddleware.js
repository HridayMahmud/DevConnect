const jwt = require('jsonwebtoken');
require('dotenv').config();

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    return next(); // ✅ Always return after calling next()
  } catch (error) {
    console.error("JWT verify error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = protect;
