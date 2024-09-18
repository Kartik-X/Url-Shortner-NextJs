import mongoose from "mongoose";

const connectDB = async () => {
  return mongoose.connect(process.env.MONGODB_URI);
};

export default connectDB;
