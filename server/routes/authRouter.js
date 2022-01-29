import { Router } from 'express';
import { check } from 'express-validator';
import {
  createUser,
  login,
  updateToken,
} from '../controller/authController.js';
import validField from '../middlewares/valid-fields.js';
import validToken from '../middlewares/valid-jwt.js';

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
router.get('/token', validToken, updateToken);

export default router;
