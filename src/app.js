const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
require("../db/conn");
const Register = require("../models/register");

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");



app.use(express.static(staticPath));
app.use(express.urlencoded({extended:false}));

app.set("view engine","hbs");
app.set("views",templatePath);

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register", async(req, res)=>{
    try{

        const password = req.body.password;
        const cpassword = req.body.confirmpassword;

        if(password === cpassword){
            const registerUser = new Register({
                name : req.body.name,
                number : req.body.number,
                email : req.body.email,
                password : password,
                confirmpassword : cpassword,
            })

            const register = await registerUser.save();
            res.status(200).render("index");
        }else{
            res.send("Password are not match")
        }



    }catch(error) {
        res.status(400).send(error)
    }
})

app.post("/login",async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({email:email});
        
        if(useremail.password == password){
            res.status(201).render("index");
        }else{
            res.send("Invalid login details");
        }
        
    } catch (error) {
        res.status(400).send("Invalid login details")
        
    }
});



app.get("*",(req,res)=>{
    res.render("404");
});



app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})