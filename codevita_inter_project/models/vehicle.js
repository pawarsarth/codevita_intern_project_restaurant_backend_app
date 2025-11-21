import mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  registration_no: { 
    type: String, 
    required: true, 
    unique: true,         // Prevent duplicates
    trim: true,           // Remove spaces
    uppercase: true       // Convert MH14 ab 1234 → MH14 AB 1234
  },
  type: {
    type: String,
    enum: ['pickup', 'van', 'truck'],
    default: 'pickup'
  },
  capacity_kg: {
    type: Number,
    default: 0
  },
  current_driver_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Driver' 
  },
  status: { 
    type: String, 
    enum: ['active', 'maintenance', 'unavailable'], 
    default: 'active' 
  }
}, { timestamps: true });

export default mongoose.model('Vehicle', VehicleSchema);
