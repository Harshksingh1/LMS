import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      req.userId = null; 
      return next();
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      req.userId = null;
      return next();
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.log("Auth Middleware Error:", error);
    req.userId = null;
    next();
  }
};

export default isAuth;
