import express from 'express';
import { createDriver, listDrivers } from '../controllers/driver.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.post('/', authenticate, authorizeRoles('admin'), createDriver);
router.get('/', authenticate, authorizeRoles('admin'), listDrivers);
export default router;