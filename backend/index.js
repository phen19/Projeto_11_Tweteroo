import express from "express";
import cors from "cors";


const server = express();
server.use(express.json())
server.use(cors())

const users = [{username:"bobesponja", avatar:"https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"}]
const tweet = []


server.post("/sign-up", (req, res) =>{
    let user = req.body;
 
    if (user.username === null || user.username === "" || user.avatar === null || user.avatar === ""){
      res.status(400).send("Todos os campos são obrigatórios");
      return;
    }
    users.push(user)
    res.status(201).send("OK");
  
  } )

  

  server.get("/tweets", (req, res) =>{
    
    
    res.send(tweet.slice(Math.max(tweet.length - 10, 0)).reverse());
  
  } )


  server.get("/tweets/:username", (req, res) => {
    const username = req.params.username
    const tweets = tweet.filter(user => user.username ===username)
    res.send(tweets)
  })

  server.post("/tweets", (req, res) =>{
    let message = req.body
    const user = req.headers.user
    const userA = users.find(u=>u.username === user)
    message.username = user
    message.avatar = userA.avatar
    if (message.username === null || message.username === "" || message.avatar === null || message.avatar === "" || message.tweet === null || message.tweet === ""){
      res.status(400).send("Todos os campos são obrigatórios");
      return;
    }
    tweet.push(message)
    res.status(201).send("OK");
  
  } )


server.listen(5000)