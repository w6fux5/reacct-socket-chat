import { Router } from 'express';

import validToken from '../middlewares/valid-jwt.js';

import { getMessageList } from '../controller/messageController.js';

const router = Router();

router.get('/:to', validToken, getMessageList);

export default router;
