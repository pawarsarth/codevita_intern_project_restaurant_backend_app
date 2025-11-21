import express from 'express';
import { getProfile, createUser, listUsers } from '../controllers/user.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.get('/me', authenticate, getProfile);
router.post('/', authenticate, authorizeRoles('admin'), createUser);
router.get('/', authenticate, authorizeRoles('admin'), listUsers);
export default router;