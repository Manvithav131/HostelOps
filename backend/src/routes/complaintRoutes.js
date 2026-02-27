const router = require("express").Router();
const Complaint = require("../models/Complaint");
const auth = require("../middleware/auth");

// Submit complaint
router.post("/", auth, async (req, res) => {
  const complaint = await Complaint.create({
    ...req.body,
    student: req.user.id,
  });

  res.json(complaint);
});

// View my complaints
router.get("/my", auth, async (req, res) => {
  const complaints = await Complaint.find({
    student: req.user.id,
  });

  res.json(complaints);
});

module.exports = router;