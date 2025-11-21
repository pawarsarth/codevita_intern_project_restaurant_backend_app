import mongoose from 'mongoose';


const RestaurantSchema = new mongoose.Schema({
name: { type: String, required: true },
phone: String,
address: String,
bins: [
{
bin_id: { type: mongoose.Schema.Types.ObjectId },
type: { type: String, enum: ['wet', 'dry', 'mixed'] },
capacity_l: Number
}
],
preferred_pickup_window: { start: String, end: String }
}, { timestamps: true });


export default mongoose.model('Restaurant', RestaurantSchema);