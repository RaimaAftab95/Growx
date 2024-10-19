'use strict';

const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const {
  UnauthorizedException
} = require('../utils/exceptions.util');

const {
  JWT_SECRET
} = process.env;

const requireAuth = async (req, _res, next) => {
  const {
    authorization
  } = req.headers;

  const token = authorization && authorization.slice(7);

  if (!token) {
    next(new UnauthorizedException('Unauthorized'));
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const { userId: _id } = decodedToken;

    const authorizedUser = await User.findById({ _id }).select('-password').lean().exec();

    if (!authorizedUser) {
      next(new UnauthorizedException('Unauthorized'));
    }

    req.user = authorizedUser;

    next();
  } catch (err) {
    next(new UnauthorizedException('Unauthorized'));
  }
};

module.exports = {
  requireAuth
};
