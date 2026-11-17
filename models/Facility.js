const mongoose = require("mongoose");

const FacilitySchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please add a facility name"], trim: true, unique: true },
    sportType: { type: String, required: [true, "Please add a sport type"], trim: true },
    location: { type: String, required: [true, "Please add a location"], trim: true },
    latitude: { type: Number, min: -90, max: 90 },
    longitude: { type: Number, min: -180, max: 180 },
    capacity: { type: Number, required: [true, "Please add a capacity"], min: [1, "Capacity must be at least 1"] },
    hourlyRate: { type: Number, required: [true, "Please add an hourly rate"], min: [0, "Hourly rate cannot be negative"] },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Facility", FacilitySchema);
