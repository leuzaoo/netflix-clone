import mongoose from "mongoose";
import { ENV_VARS } from "./envVariables.js";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("Database connected: " + connect.connection.host);
  } catch (error) {
    console.error("Error connection to MongoDB: " + error.message);
    process.exit(1);
  }
};
