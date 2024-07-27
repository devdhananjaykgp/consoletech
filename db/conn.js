const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/consoletechuser"
    // ,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true
// }
).then(()=>{
    console.log("Connection Sucessfull")
}).catch((e)=>{
    console.log("No connection")
})