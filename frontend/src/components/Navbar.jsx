import React from 'react'
import {Link} from "react-router"
import {PlusIcon} from "lucide-react"
const navbar = () => {
  return (
    <div className="bg-base-500 border-b border-base-content/10">
           <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
            <h1 className="text-4xl  font-bold text-primary font-mono tracking-tight select-none">dev.log()</h1>
            <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
            <PlusIcon  className="size-5"/>  
            <h2 >New Note</h2>
            </Link>
            </div>
            </div>
           </div>
    </div>
    
  )
}

export default navbar