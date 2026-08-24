import mongoose from 'mongoose';
const categrySchema=new mongoose.Schema({
    name:{
        type:string,
        required:true
    }
})
export const Category=mongoose.model("category",categrySchema);