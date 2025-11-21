import express from 'express';
import { createRestaurant, listRestaurants } from '../controllers/restaurant.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.post('/', authenticate, authorizeRoles('admin'), createRestaurant);
router.get('/', authenticate, authorizeRoles('admin','restaurant'), listRestaurants);
export default router;