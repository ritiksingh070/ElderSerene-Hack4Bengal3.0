import express from 'express';
import { takeAppointment ,getAllAppointment, updateAppointmentController} from '../controllers/appointmentController.js';

const router = express.Router();


// appointment routes
router.post("/get-appointment",takeAppointment);
router.get("/get-all-appointment",getAllAppointment);
router.put("/update-appointment",updateAppointmentController);

export default router;
