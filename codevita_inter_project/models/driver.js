import mongoose from 'mongoose';


const DriverSchema = new mongoose.Schema({
name: { type: String, required: true },
phone: String,
license_no: String,
status: { type: String, enum: ['active', 'inactive'], default: 'active' },
current_location: { lat: Number, lng: Number }
}, { timestamps: true });


export default mongoose.model('Driver', DriverSchema);