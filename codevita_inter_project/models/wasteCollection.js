import mongoose from 'mongoose';


const WasteCollectionSchema = new mongoose.Schema({
restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
driver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
route_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
bin_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Bin' },
scheduled_at: Date,
picked_at: Date,
status: { type: String, enum: ['pending', 'collected', 'cancelled'], default: 'pending' },
measurements: { weight_kg: Number, volume_l: Number },
photos: [String],
billing: { amount: Number, paid: { type: Boolean, default: false } }
}, { timestamps: true });


export default mongoose.model('WasteCollection', WasteCollectionSchema);