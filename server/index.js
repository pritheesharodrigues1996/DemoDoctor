import express from 'express';
import bodyParser  from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import postRoutes from '../server/routes/posts.js';

const app = express()

mongoose.connect('mongodb://localhost/Baeldung',{useNewUrlParser:true,useUnifiedTopology:true})
const dbconnect=mongoose.connection
dbconnect.on('error', (error) => {
    console.log(error)
})

dbconnect.once('connected', () => {
    console.log('Database Connected');
})


const PORT=5000;
app.use(bodyParser.json());
app.use(express.urlencoded());
app.use(cors());

// app.use('/posts',postRoutes);



const userSchema = new mongoose.Schema({
    name:{    
    type: String,
    required: [true, "Please provide an Name!"],
    unique: [true, "Name Exist"],},
    email:{    
        type: String,
        required: [true, "Please provide an email!"],
        unique: [true, "Email Exist"],},
    password:{    
         type: String,
         required: [true, "Please provide an password!"],
         unique: [true, "password Exist"],},

})

const User = new mongoose.model("User", userSchema)
app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })


   }) 
   app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    User.findone({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});

app.listen(PORT,()=>console.log(`localhost port :http://localhost:${PORT}/auth`));
