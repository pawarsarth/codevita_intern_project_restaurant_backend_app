import express from 'express';
import { listAudit } from '../controllers/audit.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
const router = express.Router();
router.get('/', authenticate, authorizeRoles('admin'), listAudit);
export default router;