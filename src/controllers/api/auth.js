const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../../models/user.model");

const { BadRequestException } = require("../../utils/exceptions.util");

const { JWT_SECRET } = process.env;

/**
 * Logins the user
 * @param {import('express').Request} req Request
 * @param {import('express').Response} res Response
 * @param {import('express').NextFunction} next Next function
 */
async function loginUser(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean().exec();
    if (!user) {
      throw new BadRequestException("Either email or password is invalid");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new BadRequestException("Either email or password is invalid");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(200).json({
      msg: "User successfully logged in",
      token,
    });
  } catch (err) {
    next(new BadRequestException(err.message));
  }
}

/**
 * Registers a new user
 * @param {import('express').Request} req Request
 * @param {import('express').Response} res Response
 * @param {import('express').NextFunction} next Next function
 */
async function registerUser(req, res, next) {
  try {
    const { fullName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(200).json({
      msg: "User successfully created",
      token,
    });
  } catch (err) {
    console.error(err);
    next(new BadRequestException(err.message));
  }
}

module.exports = {
  loginUser,
  registerUser,
};
