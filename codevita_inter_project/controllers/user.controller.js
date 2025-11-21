import User from '../models/user.js';
import AuditLog from '../models/audit.js'


export const getProfile = async (req, res) => {
res.json(req.user);
};


export const createUser = async (req, res) => {
try {
const u = await User.create(req.body);
await AuditLog.create({ action: 'user_create', user_id: req.user._id, payload: { after: u } });
res.status(201).json(u);
} catch (err) { res.status(400).json({ message: err.message }); }
};


export const listUsers = async (req, res) => {
const users = await User.find().limit(100);
res.json(users);
};