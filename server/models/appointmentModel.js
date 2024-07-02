import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, 
  },
  phone: {
    required: true,
    type: Number,
  },
  message: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  service_type: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  status: {
    type: String,
    enum: ['Activate', 'Deactivate'], // Example status options
    default: 'Activate',
  },
  assignedEmployee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', // Assuming you have an Employee model
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
