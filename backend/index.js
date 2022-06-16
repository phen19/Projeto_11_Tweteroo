import express from "express";
import cors from "cors";


const server = express();
server.use(cors())

const users = []

const tweet = {
	username: "bobesponja",
  tweet: "eu amo o hub",
}

const tweets =[
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	}
]


server.post("/sign-up", (req, res) =>{
    users.push(req)
    console.log(users)
    res.send("OK");
  
  } )


  server.get("/tweets", (req, res) =>{
    res.send(tweets);
  
  } )


server.listen(5000)