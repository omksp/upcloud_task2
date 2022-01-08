const userModel = require('./../model/user');
const {format} = require('date-fns');
;
 
//function for add data

const createuser = async(req)=>{
    const user = new userModel({
        username:req.body.username,
        age:req.body.age,
        email:req.body.email,
        address:req.body.address,
        income:req.body.income,
        married:req.body.married,
        registrationNumber:111,
        registrationDate:`${format(new Date(),'yyyy-mm-dd')}`
    })
    user.save();
}

// const fetchdata = async()=>{
//     await userModel.find({},{_id:0},(err,data)=>{
//         if(err) 
//             return err;
//         else
//             return data;
//     });

// }

//function to display data

module.exports = createuser ;