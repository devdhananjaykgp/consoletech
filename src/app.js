const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");


app.use(express.static(staticPath));

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

app.get("*",(req,res)=>{
    res.render("404");
});



app.listen(port,()=>{
    console.log(`server is up at ${port}`)
})