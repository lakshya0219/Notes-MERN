import express from 'express'
import Note from "../models/Note.js"

const router = express.Router();

router.get("/",async(req,res)=>{
  const notes = await Note.find();
  res.json();
});

router.post("/",async(req,res)=>{
const newNote = new Note(req.body);
await newNote.save();
res.json({message: "Note Created", note: newNote});
});

router.put("/:id",async(req,res)=> {
  const updatedNote = await Note.findByIdAndUpdate(req.params.body, req.body,{new:true});
  res.json({message: "Note Updated", note: updatedNote});
})

router.delete("/id", async(req,res)=>{
  await Note.findByIdAndDelete(req.params.id);
  res.json({message: "Note Deleted"});
})