import express from "express";
import notesRoutes from './routes/notesRoutes.js'
import cors from "cors";

import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app =express(); 

// **order of middleware is important***

app.use(cors({
    origin:"http://localhost:5173",
}));

app.use(express.json());//middleware that converts json to node readable js object or will parse JSON bodies:req.body


app.use(rateLimiter); // to implement rate limiting

app.use("/api/notes",notesRoutes);

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