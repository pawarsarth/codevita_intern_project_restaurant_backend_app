import mongoose from 'mongoose';


const StopSchema = new mongoose.Schema({
stop_id: mongoose.Schema.Types.ObjectId,
restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
order: Number,
expected_time: String,
status: { type: String, enum: ['pending', 'completed', 'skipped'], default: 'pending' }
});


const RouteSchema = new mongoose.Schema({
date: { type: Date, required: true },
driver_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
stops: [StopSchema],
status: { type: String, enum: ['pending', 'ongoing', 'completed'], default: 'pending' }
}, { timestamps: true });


export default mongoose.model('Route', RouteSchema);