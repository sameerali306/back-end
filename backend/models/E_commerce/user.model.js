import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    username:{
        type:string,
        required:true,
        lowercase:true,
        unique:true
    },
    email:{
        type:string,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:string,
        requird:true,
        minlength:6
    }
})
export const User=mongoose.model("user",userSchema);