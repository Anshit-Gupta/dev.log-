import Note from "../models/Note.js"
//GET
export async function getAllNotes (req,res){                          
    try {
        const notes = await Note.find().sort({createdAt:-1}); //.sort({createAt:-1} for newest first node order
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAllNotes controller:",error);  // for debugging 
        res.status(500).json({message:"internal server error"});
    }
}
// extra fuction in case user want note by id

export async function getNoteById(req,res) {
    try {
        const note=await Note.findById(req.params.id);
        if(!note)return res.status(404).json({message:"note not found"});
        res.status(200).json(note);
    } catch (error) {
        console.log("Error in getAllNotes controller:",error);  
        res.status(500).json({message:"internal server error"});
    }
}



//POST
export async function createNote(req,res){
     try {
        const{title,content} = req.body;   // when we send request to createa new note we will also send data of title and content ,we are accseing that here
        const newnote= new Note({title , content});
        const savedNote=await newnote.save();
        res.status(201).json({message:"note created ",savedNote});
     } catch (error) {
        console.log("Error in creatNote controller",error);
        res.status(500).json({message:"internal server error"});
     }
};

//PUT
export async function updateNote(req,res){
     try {
        const {title,content}=req.body;
        const updatednote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});

        if(!updatednote)return res.status(404).json({message:"note not found"});
        res.status(200).json({message:"Note updated",updatednote});
     } catch (error) {
        console.log("Error in updateNote controller",error);
        res.status(500).json({message:"internal server error"});
     }
}


//DELETE
export async function deleteNote(req,res){
    try {
        const todeletenode = await Note.findByIdAndDelete(req.params.id);
        if(!todeletenode)return res.status(404).json({message:"note not found"});
        res.status(200).json({message:"node deltead succesfully"});
    } catch (error) {
        console.log("Error in updateNote controller",error);
        res.status(500).json({message:"internal server error"});
    }
}