const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    category: String,
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
    },
    status: {
      type: String,
      enum: ["pending", "in-progress", "resolved"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Complaint", complaintSchema);