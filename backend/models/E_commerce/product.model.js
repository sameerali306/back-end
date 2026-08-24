import mongoose from 'mongoose';
const productsSchema=new mongoose.Schema({
    name:{
        type:string,
        required:true,
        
    },
    description:{
        type:string,
        required:true,
        
    },
    productimage:{
        type:string,
    },
    price:{
        type:number,
        default:0
    },
    stock:{
        default:0,
        type:number
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
})
export const Products=mongoose.model("products",productsSchema);