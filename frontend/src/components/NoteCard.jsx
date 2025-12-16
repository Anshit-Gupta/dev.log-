import React from 'react'
import {Link} from 'react-router'
import {PenSquareIcon,Trash2Icon} from 'lucide-react'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from "react-hot-toast"

const NoteCard = ({note,setNotes}) => {

  const handleDelete= async(e,id)=>{
        // the issue here is whene we click on the bin icon it takes us to the detail page as the whole notecard is a Link
        //to solve this we will use preventdefault which get rid of the navigation behavior
        e.preventDefault();

        if(!window.confirm("Are you sure you want to delete this note?"))return;
        try {
           await api.delete(`/notes/${id}`);
          // the UI is not getting updated untill we refresh manually for that 
          setNotes((prev)=> prev.filter(note =>note._id !==id)) //get rid of the deleted note from the setNotes array
          toast.success("Note deleted successfully!");
        } catch (error) {
          console.log("error deleting note",error);
          toast.error("failed to delete the note"); 
        } 
  }
  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-200 border-t-4 border-solid border-[#9ECE6A]" >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions justify-between items-center mt-4">
         <span className="text-sm  text-base-content/60">
            {formatDate(new Date(note.createdAt))}
         </span>

         <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4"/>
            <button className="btn btn-ghost btn-xs text-error " onClick={(e)=>handleDelete(e,note._id)}>
                <Trash2Icon className="size-4"/>
            </button>
         </div>
        </div>
      </div>
    </Link>
  )
}

export default NoteCard