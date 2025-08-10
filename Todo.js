import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const TodoSchema= new mongoose.Schema({
    title:string,
    des:string,
    isDone:boolean

});
export const Todo=mongoose.model('Todo',TodoSchema);