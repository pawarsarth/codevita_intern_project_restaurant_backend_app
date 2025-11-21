import Route from '../models/route.js';
import AuditLog from '../models/audit.js'


export const createRoute = async (req, res) => {
try {
const r = await Route.create(req.body);
await AuditLog.create({ action: 'route_create', user_id: req.user._id, payload: { after: r } });
res.status(201).json(r);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const listRoutes = async (req, res) => {
const items = await Route.find().limit(200);
res.json(items);
};