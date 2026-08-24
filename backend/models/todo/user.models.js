import mongoose from "mongoose";
const Userschema = new mongoose.Schema(
  {
    // username:String,
    // email:String,
    // isActive:Boolean
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: password,
      required: [true, "password is required"],
    },
  },
  { timestamps: true },
);

export const User = mongoose.model("user", Userschema);
