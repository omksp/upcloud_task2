const express = require('express');
const path = require('path');
const app = express();
const userModel = require('./model/user');

const createuser  = require('./controller/usercont')

// built-in middleware to handle urlencoded form data
// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));
// built-in middleware for json 
app.use(express.json());


//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})


app.get('^/$|index(.html)',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})


app.post('/',(req,res)=>{
    try{
    console.log(req.body);
    createuser(req);
    
   res.setTimeout(10000);
    }
    catch(err){
        throw err;
    }
    res.send("Registration form submitted successfully");
})



app.get('/api/upcloud/user/',(req,res)=>{
    userModel.find({},{_id:0,username:1,age:1,email:1},(err,data)=>{
    if(err) 
        res.status(200).json({err:"error"});
    else
        res.status(200).json({users:data});
    });
   // res.status(200).json({users:fetchdata()})
});


app.listen(3000,()=>{
    console.log("server started on port "+3000);
})

