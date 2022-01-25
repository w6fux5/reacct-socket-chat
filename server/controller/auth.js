import User from '../model/User.js';

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

    await user.save();
    res.json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error,
    });
  }
};

export const login = (req, res) => {
  const { email, password } = req.body || {};

  res.json({
    ok: true,
    message: 'login',
    email,
    password,
  });
};

export const updateToken = (req, res) => {
  res.json({
    ok: true,
    message: 'update token',
  });
};
