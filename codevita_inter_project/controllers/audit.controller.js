import AuditLog from '../models/audit.js'


export const listAudit = async (req, res) => {
const items = await AuditLog.find().sort({ timestamp: -1 }).limit(500);
res.json(items);
};