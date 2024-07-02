import express from 'express';

import { getAllEmployee } from '../controllers/adminController.js';
import { createContact, getAllContact } from '../controllers/contactController.js';

const router = express.Router();


// appointment routes
router.get("/all-employee",getAllEmployee);
router.post("/send-contact-info",createContact);
router.get("/all-contact-info",getAllContact);

export default router;
