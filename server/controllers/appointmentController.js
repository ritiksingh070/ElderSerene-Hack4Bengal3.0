import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointmentModel.js";

export const takeAppointment = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, message, city, service_type, state, address } = req.body;

  if (!name || !email || !phone || !message || !city || !service_type || !state || !address) {
    return next(new ErrorHandler("Please fill out the entire form!", 400));
  }

  try {
    const appointment = await Appointment.create({
      name,
      email,
      phone,
      message,
      city,
      service_type,
      state,
      address,
      status: 'Activate', // Default status
    });

    res.status(200).json({
      success: true,
      message: "Appointment created successfully",
      appointment,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return next(new ErrorHandler("Appointment could not be created", 500));
  }
});
export const getAllAppointment = catchAsyncErrors(async (req, res, next) => {
    const appointment = await Appointment.find({})
    
    res.status(200).json({
      success: true,
      appointment,
    });

  });
  

  
  export const updateAppointmentController = async (req, res, next) => {
    
      const { id } = req.params;
      console.log(id)
      const { assignedEmployee } = req.body;
  
      const updateAppointment = await Appointment.findByIdAndUpdate(id, { ...req.body }, { new: true });
      if (!updateAppointment) return next(new ErrorHandler("updateAppointment not found", 404));
      await updateAppointment.save();
    
      res.status(200).json({
        success: true,
        message: "speaker Updated!",
      });
      next();
    
  };
  
