import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB(); // Connect to MongoDB before accepting requests
  console.log(`Server running on port ${PORT}`);
});
