const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  generateBadRequestError,
  generateUnauthenticatedError,
} = require("../errors");

//---------------------------------------------------------------------------------------
const register = async (req, res) => {
  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ user: { name: user.getName() }, token: user.createJWT() });
};

//---------------------------------------------------------------------------------------
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(generateBadRequestError("Email and Password are required !"));
    }

    // check user exists !
    const user = await User.findOne({ email });
    if (!user) {
      return next(generateUnauthenticatedError("User unknown!"));
    }

    // check password !
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return next(generateUnauthenticatedError("User unknown!"));
    }

    //All OK : send token
    return res
      .status(StatusCodes.OK)
      .json({ user: { name: user.getName() }, token: user.createJWT() });
  } catch (err) {
    res.json(err.message);
  }
};

module.exports = { register, login };
