import mongoose from 'mongoose';
const subTodoSchema=({
    content:{
        type:string,
        required:true
    },
    completed:{
        type:boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true});
export const SubTodo=mongoose.model("subtodo",subTodoSchema);