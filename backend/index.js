import express from "express";
import cors from "cors";


const server = express();
server.use(express.json())
server.use(cors())

const users = []
const tweet = []


server.post("/sign-up", (req, res) =>{
    let user = req.body;
    console.log(user)
    users.push(user)
    res.send("OK");
  
  } )

  

  server.get("/tweets", (req, res) =>{
    
    
    res.send(tweet.slice(Math.max(tweet.length - 10, 0)).reverse());
  
  } )

  server.post("/tweets", (req, res) =>{
    let teste = req.body
    const user = users.find(u=>u.username === teste.username)
    teste.avatar = user.avatar
    tweet.push(teste)
    res.send("OK");
  
  } )


server.listen(5000)