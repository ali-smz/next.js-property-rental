import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("DB already connected ...");
    return;
  }

  try {
    mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("DB connected ...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
