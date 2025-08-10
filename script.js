import mongoose from "mongoose";
import express from "express";
import { Todo } from "./Todo.js";
import { title } from "process";
let conn=await mongoose.connect("mongodb://localhost:27017/") //connection string

//hello function for express

const app=Express()
const port=3000

app.get('/',(req,res)=>{
    const todo=new Todo(title ="hey, first todo",des="description of this todo", isDone=false);
    todo.save();
    res.send('hello world!')
})
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})