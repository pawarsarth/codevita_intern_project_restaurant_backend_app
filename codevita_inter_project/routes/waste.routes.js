import express from 'express';
import { schedulePickup, completePickup, listWaste } from '../controllers/waste.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.post('/schedule', authenticate, authorizeRoles('admin','restaurant'), schedulePickup);
router.post('/:id/complete', authenticate, authorizeRoles('driver'), completePickup);
router.get('/', authenticate, authorizeRoles('admin','restaurant'), listWaste);
export default router;