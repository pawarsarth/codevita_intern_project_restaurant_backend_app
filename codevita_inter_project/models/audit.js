import mongoose from 'mongoose';


const AuditLogSchema = new mongoose.Schema({
action: { type: String, required: true },
user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
timestamp: { type: Date, default: Date.now },
payload: { before: Object, after: Object, metadata: Object }
});


export default mongoose.model('AuditLog', AuditLogSchema);