import jwt from 'jsonwebtoken';

const validJWT = (req, res, next) => {
  try {
    const token = req.header('x-token');

    if (!token) {
      return res.status(401).json({
        ok: false,
        message: 'no token',
      });
    }

    const { uid } = jwt.verify(token, process.env.JWT_KEY);

    req.uid = uid;

    next();
  } catch (error) {
    res.status(401).json({
      ok: false,
      message: 'token is invalid',
    });
  }
};

export default validJWT;
