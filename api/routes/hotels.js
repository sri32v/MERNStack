import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();
// Create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  console.log(newHotel);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Update
router.put("/:id", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Delete
// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body);
//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });
// Get
// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body);
//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });
// GetAll
// router.post("/", async (req, res) => {
//   const newHotel = new Hotel(req.body);
//   try {
//     const savedHotel = await newHotel.save();
//     res.status(200).json(savedHotel);
//   } catch (error) {
//     res.status(500).json(err);
//   }
// });
router.get("/", (req, res) => {
  res.send("Hello this is hotels endpoint");
});

export default router;
