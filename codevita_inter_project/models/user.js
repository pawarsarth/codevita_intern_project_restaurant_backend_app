import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password_hash: { type: String, required: true },
role: { type: String, enum: ['admin', 'restaurant', 'driver'], required: true },
restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' }
}, { timestamps: true });


export default mongoose.model('User', UserSchema);