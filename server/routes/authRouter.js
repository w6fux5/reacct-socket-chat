import { Router } from 'express';
import { check } from 'express-validator';
import { createUser, login, updateToken } from '../controller/auth.js';
import validField from '../middlewares/valid-fields.js';

const router = Router();

// login
router.post(
  '/',
  [
    check('email', 'email is invalid').isEmail(),
    check('password', 'password is invalid').isLength({ min: 6 }),
  ],
  validField,
  login
);

//  new user
router.post(
  '/new',
  [
    check('email', 'email is invalid').isEmail(),
    check('name', 'name is invalid').not().isEmpty(),
    check('password', 'password is invalid').isLength({ min: 6 }),
  ],
  validField,
  createUser
);

// valid token
router.get('/token', updateToken);

export default router;
