import Driver from '../models/driver.js';
import AuditLog from '../models/audit.js'


export const createDriver = async (req, res) => {
try {
const d = await Driver.create(req.body);
await AuditLog.create({ action: 'driver_create', user_id: req.user._id, payload: { after: d } });
res.status(201).json(d);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const listDrivers = async (req, res) => {
const items = await Driver.find().limit(200);
res.json(items);
};