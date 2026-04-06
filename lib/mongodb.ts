import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return { conn: cached.conn, isFallback: false };

  // Fallback in dev if URI is missing
  if (!MONGO_URI) {
    if (process.env.NODE_ENV === 'development') {
      return { conn: null, isFallback: true };
    }
    throw new Error("MONGO_URI is not defined");
  }

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGO_URI, {
        dbName: 'unhesitate',
        bufferCommands: false,
        connectTimeoutMS: 5000, // Quick timeout for dev fallback
      });
    }

    cached.conn = await cached.promise;
    return { conn: cached.conn, isFallback: false };
  } catch (error) {
    cached.promise = null; // Clear promise to allow retry
    if (process.env.NODE_ENV === 'development') {
      console.warn("MongoDB connection failed, falling back to local file storage.");
      return { conn: null, isFallback: true };
    }
    throw error;
  }
};
