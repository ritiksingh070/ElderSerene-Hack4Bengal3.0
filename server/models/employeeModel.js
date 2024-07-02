import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
  employeeID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  employeeType: { type: String, required: true, enum: ['Doctor', 'Nurse', 'Caretaker', 'Physiotherapist', 'Cook', 'CleaningStaff'] },
  joinDate: { type: Date, required: true },
  status: { type: String, required: true, enum: ['Active', 'Inactive'] },
  specialization: { type: String },
  qualifications: { type: String },
  experienceYears: { type: Number },
  licenseNumber: { type: String },
  availability: [{ day: String, startTime: String, endTime: String }],
  consultationTypes: [String],
  skills: [String],
  shiftTimings: [{ day: String, startTime: String, endTime: String }],
  liveIn: { type: Boolean },
  cuisineSpecialties: [String]
});
const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;