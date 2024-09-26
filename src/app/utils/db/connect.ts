import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export const connect = async () => {
  if (isConnected) return; // Avoid reconnecting if already connected

  try {
    const db = await mongoose.connect(
      "mongodb+srv://0xhexmex0x:KjVKSkCka56vuHn5@cluster0.02p4c.mongodb.net/Blog"
    );
    isConnected = true;
    console.log("MongoDB connected successfully.");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
