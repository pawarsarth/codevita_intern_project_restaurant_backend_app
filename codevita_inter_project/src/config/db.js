import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const MONGO_URI = process.env.MONGO_URI 


export const connectDB = async () => {
try {
await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(' MongoDB Connected Successfully');
} catch (err) {
console.error('MongoDB Connection Failed', err);
process.exit(1);
}
};