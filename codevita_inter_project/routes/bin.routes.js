import express from "express";
import { authenticate } from "../middleware/auth.js"; // if you have it
import {
  createBin,
  getBins,
  getBinById,
  updateBin,
  deleteBin
} from "../controllers/bin.controller.js";

const router = express.Router();

// Create a new bin
router.post("/", authenticate, createBin);

// Get all bins
router.get("/", authenticate, getBins);

// Get single bin
router.get("/:id", authenticate, getBinById);

// Update bin
router.put("/:id", authenticate, updateBin);

// Delete bin
router.delete("/:id", authenticate, deleteBin);

export default router;
