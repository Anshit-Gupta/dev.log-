import mongoose from "mongoose"
//1- cerate a schema 
//2- model based of that scema

const noteSchema = new mongoose.Schema({
 title:{
    type:String,
    required:true
 },
 content:{
    type:String,
    required:true
 }

},{timestamps:true})

const Note =mongoose.model("Note",noteSchema);

export default Note