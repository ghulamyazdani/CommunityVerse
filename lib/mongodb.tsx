import mongoose from "mongoose";
const uri: any = process.env.MONGODB_URI;
export const connectDB = async () => {
  try {
    const conn: any = await mongoose.connect(uri);
  } catch (error: any) {
    console.error(error.message);
    process.exit(1);
  }
};
