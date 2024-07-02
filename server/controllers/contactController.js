import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Appointment } from "../models/appointmentModel.js";
import Contact from "../models/contactModel.js";

export const createContact = async (req, res) => {
    const { name, email, phone, message} = req.body;

  if (!name || !email || !phone || !message ) {
    return next(new ErrorHandler("Please fill out the entire form!", 400));
  }

  try {
    const contact = await Contact.create({
      name,
      email,
      phone,
      message,
     
    });

    res.status(200).json({
      success: true,
      message: "Appointment created successfully",
      contact,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return next(new ErrorHandler("Appointment could not be created", 500));
  }
  };
export const getAllContact = catchAsyncErrors(async (req, res, next) => {
    const contact = await Contact.find({})
    
    res.status(200).json({
      success: true,
      contact,
    });

  });
  
