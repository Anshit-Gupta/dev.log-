import express from "express"

const router = express.Router();
import { createNote, deleteNote, getAllNotes, updateNote,getNoteById } from "../controllers/notesControllers.js";

 // we write "/" as we already in /api/notes
router.get("/",getAllNotes);
router.get("/:id",getNoteById);                                    
router.post("/",createNote);
router.put("/:id",updateNote); 
router.delete("/:id",deleteNote);

export default router


