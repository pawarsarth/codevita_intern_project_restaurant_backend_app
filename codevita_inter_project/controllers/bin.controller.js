import Bin from "../models/bin.js"

export const createBin = async (req, res) => {
  try {
    const bin = await Bin.create(req.body);
    res.status(201).json({ success: true, data: bin });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getBins = async (req, res) => {
  try {
    const bins = await Bin.find().populate("restaurant_id", "name address");
    res.json({ success: true, data: bins });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getBinById = async (req, res) => {
  try {
    const bin = await Bin.findById(req.params.id).populate("restaurant_id");
    if (!bin) return res.status(404).json({ success: false, message: "Bin not found" });

    res.json({ success: true, data: bin });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateBin = async (req, res) => {
  try {
    const bin = await Bin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ success: true, data: bin });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const deleteBin = async (req, res) => {
  try {
    await Bin.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Bin deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
