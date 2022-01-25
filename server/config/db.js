import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('Try connect to MongoDB....');
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
