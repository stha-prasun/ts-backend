import mongoose, { Schema, Document } from "mongoose";

// Interface for TypeScript type safety
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Mongoose schema
const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
