import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS || '10');
const JWT_SECRET = process.env.JWT_SECRET || 'change_this_secret';
const JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';


export const hashPassword = async (password) => {
return bcrypt.hash(password, SALT_ROUNDS);
};


export const verifyPassword = async (password, hash) => {
return bcrypt.compare(password, hash);
};


export const generateToken = (user) => {
const payload = { id: user._id, role: user.role };
return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRY });
};


export const signupUser = async ({ name, email, password, role, restaurant_id }) => {
const existing = await User.findOne({ email });
if (existing) throw new Error('Email already in use');
const password_hash = await hashPassword(password);
const user = await User.create({ name, email, password_hash, role, restaurant_id });
return user;
};


export const loginUser = async ({ email, password }) => {
const user = await User.findOne({ email });
if (!user) throw new Error('Invalid credentials');
const ok = await verifyPassword(password, user.password_hash);
if (!ok) throw new Error('Invalid credentials');
const token = generateToken(user);
return { user, token };
};