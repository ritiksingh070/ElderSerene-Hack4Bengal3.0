import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import Employee from "../models/employeeModel.js";


export const getAllEmployee = catchAsyncErrors(async (req, res, next) => {
    const employee = await Employee.find({})
    
    res.status(200).json({
      success: true,
      employee,
    });

  });
