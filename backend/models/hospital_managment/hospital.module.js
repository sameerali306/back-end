import mongoose from "mongoose"

const hospitalSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    },
    spacialized:[
        {
            type:String
        }
    ],
},{timestamps:true})
export const hospital = mongoose.model("hospital", hospitalSchema);