import express from 'express';
import { createRoute, listRoutes } from '../controllers/route.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.post('/', authenticate, authorizeRoles('admin'), createRoute);
router.get('/', authenticate, authorizeRoles('admin','driver'), listRoutes);
export default router;