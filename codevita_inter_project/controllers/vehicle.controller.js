import Vehicle from '../models/vehicle.js';
import AuditLog from '../models/audit.js'


export const createVehicle = async (req, res) => {
try {
const v = await Vehicle.create(req.body);
await AuditLog.create({ action: 'vehicle_create', user_id: req.user._id, payload: { after: v } });
res.status(201).json(v);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const listVehicles = async (req, res) => {
const items = await Vehicle.find().limit(200);
res.json(items);
};