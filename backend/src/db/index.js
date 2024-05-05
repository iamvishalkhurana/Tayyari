import mongoose from "mongoose";
const DB_NAME = "Trading";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(`DB connected : ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("DB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
