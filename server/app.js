import  express from "express";
import { Server } from "socket.io";
import {createServer} from "http";
import cors from "cors";
const port = 3000;
const app = express();
const server= new createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true,
    },
});

app.get('/',(req,res)=>{
    res.send("Hey U Guy");
});
io.on("connection",(socket)=>{
    console.log("user connected");
    console.log("ID",socket.id);
});
server.listen(port,()=>{
    console.log(`server running on ${port}`);
})
