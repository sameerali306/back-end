import mongoose from 'mongoose';
const todoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    completed:{
        type:boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"subtodo"
        }
    ]
},{timestamps:true});
export const Todo=mongoose.model("todo",todoSchema);