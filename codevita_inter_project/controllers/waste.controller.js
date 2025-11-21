import WasteCollection from '../models/wasteCollection.js';
import AuditLog from '../models/audit.js'


export const schedulePickup = async (req, res) => {
try {
const wc = await WasteCollection.create(req.body);
await AuditLog.create({ action: 'waste_scheduled', user_id: req.user._id, payload: { after: wc } });
res.status(201).json(wc);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const completePickup = async (req, res) => {
try {
const { id } = req.params;
const update = { status: 'collected', picked_at: new Date(), measurements: req.body.measurements, photos: req.body.photos };
const wc = await WasteCollection.findByIdAndUpdate(id, update, { new: true });
await AuditLog.create({ action: 'waste_collected', user_id: req.user._id, payload: { after: wc } });
res.json(wc);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const listWaste = async (req, res) => {
const items = await WasteCollection.find().limit(200);
res.json(items);
};