import mongoose from "mongoose"

const medicalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    diaganoseWith: {
      type: string,
      required: true,
    },
    address: {
      type: string,
      required: true,
    },
    age: {
      type: number,
      required: true,
    },
    bloodgroup: {
      type: string,
      required: true,
    },
    Gender: {
      type: string,
      enum: ["male", "female", "other"],
      require: true,
    },
    diaganoseWith: {
      type: string,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital",
    },
  },
  { timestamps: true },
);
export const medicalRecord=mongoose.model("medicalRecord",medicalRecordSchema)