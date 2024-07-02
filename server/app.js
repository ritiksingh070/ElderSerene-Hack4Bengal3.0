import express from 'express'
import dotenv from 'dotenv';
import {connectDb} from './config/db.js';
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import userRoutes from "./routes/userRoutes.js";
import appointmentRoutes from "./routes/appointmentRoute.js";
import adminRoutes from "./routes/adminRoute.js";

const app =express(); 

dotenv.config();
connectDb();

app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      method: ["GET", "POST", "DELETE", "PUT"],
      credentials: true,
    })
  );

  // app.use(cors())
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/appointment", appointmentRoutes);
app.use("/api/v1/admin", adminRoutes);

app.use(errorMiddleware);
const PORT = 8080 || process.env.PORT

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

