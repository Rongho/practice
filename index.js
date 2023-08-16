import express from 'express';

const server=express();

server.use("/",(req,res)=>{
res.send("Hi its started")  
})
server.listen(8000,()=>{
    console.log("server started")
})
