import express from "express";
import notesRoutes from './routes/notesRoutes.js'
import cors from "cors";
import path from "path";

import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app =express(); 
const __dirname=path.resolve();

// **order of middleware is important***

if(process.env.NODE_ENV !=="production")
{
   app.use(cors({
    origin:"http://localhost:5173",
    }));
}


app.use(express.json());//middleware that converts json to node readable js object or will parse JSON bodies:req.body


app.use(rateLimiter); // to implement rate limiting

app.use("/api/notes",notesRoutes);

// path 
app.use(express.static(path.join(__dirname,"../frontend/dist")));


if(process.env.NODE_ENV ==="production")
{
   app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}


connectDB().then(()=>{   // this is better , after my DB is connected then start the server as like if my db connection fail what is the point of starting my server
app.listen(process.env.PORT || 5001,()=>{
    console.log("server started on port:",process.env.PORT);
    })
});


//example of simeple custom middleware
// app.use((req,res,next)=>{
//     console.log(`req method is ${req.method} and req url is ${req.url} `);
//     next();
// })