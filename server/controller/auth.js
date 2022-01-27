import bcrypt from 'bcryptjs';

import User from '../model/User.js';

// Helpers
import generateJWT from '../helpers/jwt.js';

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const existsUser = await User.findOne({ email });

    if (existsUser) {
      return res.status(400).json({
        ok: false,
        message: 'email is exists',
      });
    }

    const user = new User(req.body);

    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateJWT(user.id);

    res.json({
      ok: true,
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body || {};

  try {
    const existsUser = await User.findOne({ email });

    if (!existsUser) {
      return res.status(404).json({
        ok: false,
        message: 'email is not exists',
      });
    }

    const validPassword = bcrypt.compareSync(password, existsUser.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        message: 'password is not correct',
      });
    }

    const token = await generateJWT(existsUser.id);

    res.json({
      ok: true,
      token,
      user: existsUser,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};

export const updateToken = (req, res) => {
  res.json({
    ok: true,
    message: 'update token',
  });
};
