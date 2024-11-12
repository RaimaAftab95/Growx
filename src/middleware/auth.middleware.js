// const jwt = require("jsonwebtoken");

// const User = require("../models/user.model");
// const { UnauthorizedException } = require("../utils/exceptions.util");

// const { JWT_SECRET } = process.env;

// const requireAuth = async (req, _res, next) => {
//   const { authorization } = req.headers;

//   const token = authorization && authorization.slice(7);

//   if (!token) {
//     next(new UnauthorizedException("Unauthorized"));
//   }

//   try {
//     const decodedToken = jwt.verify(token, JWT_SECRET);
//     const { userId: _id } = decodedToken;

//     const authorizedUser = await User.findById({ _id })
//       .select("-password")
//       .lean()
//       .exec();

//     if (!authorizedUser) {
//       next(new UnauthorizedException("Unauthorized"));
//     }

//     req.user = authorizedUser;

//     next();
//   } catch (err) {
//     next(new UnauthorizedException("Unauthorized"));
//   }
// };

// module.exports = {
//   requireAuth,
// };



//trial
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const { JWT_SECRET } = process.env;

const requireAuth = async (req, res, next) => {
  // Extract token from Authorization header
  const { authorization } = req.headers;

 
  const token = authorization || null;

  if (!token) {
    console.error("Token missing");
    return res.redirect("/auth/login");
   
  }

  try {
    // Verify token
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const { userId: _id } = decodedToken;

    if (!_id) {
      console.error("No user ID in decoded token");
      return res.redirect("/auth/login");
      
    }

    // Find the user by decoded ID, excluding the password
    const authorizedUser = await User.findById(_id)
      .select("-password")
      .lean()
      .exec();

    if (!authorizedUser) {
      console.error("User not found");
      return res.redirect("/auth/login");
      
    }

    // Attach the authorized user to the request object
    req.user = authorizedUser;

    // Continue to the next middleware or controller
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    // If token is invalid or any error occurs, redirect to login page
    return res.redirect("/auth/login");
    
  }
};

module.exports = {
  requireAuth,
};
