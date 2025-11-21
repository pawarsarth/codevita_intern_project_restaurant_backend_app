import { signupUser, loginUser } from '../services/auth.service.js';
import AuditLog from '../models/audit.js'


export const signup = async (req, res) => {
try {
const { name, email, password, role, restaurant_id } = req.body;
const user = await signupUser({ name, email, password, role, restaurant_id });
await AuditLog.create({ action: 'user_signup', user_id: user._id, payload: { after: user } });
res.status(201).json({ user });
} catch (err) {
res.status(400).json({ message: err.message });
}
};


export const login = async (req, res) => {
try {
const { email, password } = req.body;
const { user, token } = await loginUser({ email, password });
await AuditLog.create({ action: 'user_login', user_id: user._id, payload: { metadata: { ip: req.ip } } });
res.json({ user, token });
} catch (err) {
res.status(401).json({ message: err.message });
}
};