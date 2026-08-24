import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    Experience: {
      type: number,
      default: 0,
    },
    workIn: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref:"hospital"
      },
    ],
  },
  { timestamps: true },
);
export const doctor= mongoose.model("doctor", doctorSchema);
