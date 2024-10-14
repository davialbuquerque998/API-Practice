import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcrypt";

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
    unique: true,
    lowercase:true
  },
  username: {
    type: String,
    required: true,
    unique:true
  },
  avatar: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select:false
  },
  background: {
    type: String,
    required: true,
  }
});

// Modified pre-save hook
UserSchema.pre("save", async function(this: IUser, next: Function) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Create and export the User model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export {
    User,
    IUser
}