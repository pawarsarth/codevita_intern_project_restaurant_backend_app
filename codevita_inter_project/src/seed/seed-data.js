import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from '../config/db.js';
import User from '../models/User.js';
import Restaurant from '../models/Restaurant.js';


const run = async () => {
await connectDB();
await User.deleteMany({});
await Restaurant.deleteMany({});


const admin = await User.create({ name: 'Admin', email: 'admin@local', password_hash: 'changeme', role: 'admin' });
const rest = await Restaurant.create({ name: 'Green Plate', phone: '+919999999999', address: 'MG Road, Pune' });


console.log('Seeded:', { admin, rest });
process.exit(0);
};


run().catch((e)=>{console.error(e); process.exit(1)});