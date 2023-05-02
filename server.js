var express=require('express')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors=require('cors')
dotenv.config();
const bodyParser=require('body-parser')
process.env.TOKEN_KEY;
var app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))

console.log("hello world")

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_KEY, { expiresIn: '1800s' });
  }
app.post('/api/post',async (req,res)=>{
    // console.log(req.body,"body data")
    // let username=req.body.user
    // console.log(username,"found")
    const token =  await generateAccessToken({ user: req.body.name });
    req.body.name.includes('harry')?res.status(200).json({tokenkey:token}):res.status(200).json({msg:"No match found"})
    
    // let result=await req.body.name
    // try{
    //     if(result.includes('harry'))   
    //     {
    //         const token =  generateAccessToken({ user: req.body.user });
    //         res.json(token);
    //         res.status(200).json({token_key:token})
    //         console.log(username)
    //     }
    //     else{
    //         res.status(400).json({msg:"user not found"})
    //     }
       
    // }   
    // catch(err){
    //     res.send(400).json({msg:"not found"})
    // }
   
})

app.get('/api', (req, res)=>{
    res.status(200).json({msg:"successfully implemented JWT"})
    // jwt.verify(token, process.env.TOKEN_KEY, function(err, decoded){
    //   if(!err){
    //     var secrets = {'accountNumber' : '938291239','pin' : '11289','account' : 'Finance'};
    //     res.json(secrets);
    //   } else {
    //     res.send(err,"Error found");
    //   }
    // })
  })

app.get('/api/data',)
app.listen(8080)