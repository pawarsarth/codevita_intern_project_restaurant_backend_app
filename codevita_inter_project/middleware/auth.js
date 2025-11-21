import jwt from 'jsonwebtoken';
import User from '../models/user.js';


const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';


export const authenticate = async (req, res, next) => {
try {
const header = req.headers.authorization;
if (!header) return res.status(401).json({ message: 'Missing auth token' });
const token = header.replace('Bearer ', '');
const payload = jwt.verify(token, JWT_SECRET);
const user = await User.findById(payload.id);
if (!user) return res.status(401).json({ message: 'Invalid token' });
req.user = user;
next();
} catch (err) {
return res.status(401).json({ message: 'Unauthorized', error: err.message });
}
};