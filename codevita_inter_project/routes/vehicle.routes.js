import express from 'express';
import { createVehicle, listVehicles } from '../controllers/vehicle.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.post('/', authenticate, authorizeRoles('admin'), createVehicle);
router.get('/', authenticate, authorizeRoles('admin'), listVehicles);
export default router;