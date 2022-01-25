import { validationResult } from 'express-validator';

const validField = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      message: errors.mapped(),
    });
  }

  next();
};

export default validField;
