import User from "../models/User.js";

function sendata(data) {
    const users=[];
    data.forEach(p => {
        users.push({
            name:p.username,
            email:p.email,
            image:p.image,
            owner:p._id,
        });
    }); 
    return users;
}

const getallusers=(req,res)=>{
   
    const sarch=req.params.name;
    console.log(sarch);
    User.find({ username:new RegExp(sarch,'i') },(err,data)=>{
        console.log(data);
        if(err) console.log(err);
        else if(data){
            res.status(201).json(sendata(data));
        }
        else{
            console.log("No match found.");
        }
    });
}

export default getallusers;