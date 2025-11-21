import mongoose from "mongoose";

const BinSchema = new mongoose.Schema(
  {
    restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },

    type: { type: String, enum: ["wet", "dry", "mixed"], required: true },

    capacity_l: { type: Number, required: true },

    status: { type: String, enum: ["active", "damaged"], default: "active" }
  },
  { timestamps: true }
);

export default mongoose.model("Bin", BinSchema);
