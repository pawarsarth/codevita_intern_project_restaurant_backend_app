import Restaurant from '../models/restaurant.js';
import AuditLog from '../models/audit.js'


export const createRestaurant = async (req, res) => {
try {
const r = await Restaurant.create(req.body);
await AuditLog.create({ action: 'restaurant_create', user_id: req.user._id, payload: { after: r } });
res.status(201).json(r);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const listRestaurants = async (req, res) => {
const items = await Restaurant.find().limit(200);
res.json(items);
};