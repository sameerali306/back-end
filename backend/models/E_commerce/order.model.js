import mongoose from  "mongoose";
const orderSchema=new mongoose.Schema({
    orderPrice:{
        type:number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }

})
export const Order=mongoose.model("order",orderSchema);