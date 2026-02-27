const router = require("express").Router();
const Complaint = require("../models/Complaint");
const auth = require("../middleware/auth");

// Get all complaints
router.get("/complaints", auth, async (req, res) => {
  const complaints = await Complaint.find().populate("student");
  res.json(complaints);
});

// Update complaint status
router.put("/complaints/:id", auth, async (req, res) => {
  const updated = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(updated);
});

// Filter complaints
router.get("/filter", auth, async (req, res) => {
  const { category, status } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (status) filter.status = status;

  const complaints = await Complaint.find(filter);
  res.json(complaints);
});

module.exports = router;