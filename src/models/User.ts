import mongoose, { Document, Model } from "mongoose";

// Define the interface for the user document
interface IUser extends Document {
  name: string;
  email: string;
  username: string;
  avatar: string;
  password: string;
  background: string;
}

// Define the user schema
const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  background: {
    type: String,
    required: true,
  }
});

// Create and export the User model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export {
    User,
    IUser
}