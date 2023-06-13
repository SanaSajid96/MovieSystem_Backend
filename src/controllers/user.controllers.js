const User= require('../models/user.model');
const express=require('express');
const bcrypt=require('bcrypt')
const router=express.Router();
const jwt=require("jsonwebtoken")


router.post('/register',async(req,res)=>{
    try{
    const{name,email,password,role}=req.body;

    const ispresent=await User.findOne({email})
    if(!ispresent){
 const usercreate=await User.create({name,email,password,role})
 return res.send(usercreate)
    }
    res.status(405).send("user already exist")
}
catch(err){
    res.send({error:err.message})
}
})



router.post('/login', async(req,res)=>{
    try {
      // Find user by email
      const user = await User.find({email:req.body.email});
      console.log(user.role)
     
      if (!user) {
        // User not found
        return res.status(401).json({ error: "invalid user" });
      }
      const users = user[0];
      // Compare passwords
     console.log(req.body.password)
      const passwordMatch =  bcrypt.compareSync(req.body.password, user[0].password);
    
        
      
      if (!passwordMatch) {
        // Password does not match
        return res.status(401).json({ error: 'Invalid password' });
      }https://github.com/SanaSajid96/MovieSystem_Backend.git
      
             const payload ={userid:users._id,role:users.role}
            
            const token=jwt.sign(payload,"sana",{
                
            }
            
        )
      
      // Passwords match, user is logged in
      res.status(200).json({ message: 'Logged in',token:token});
    } catch (error) {
      // Handle any potential errors
      res.status(500).json({ error: error.message });
    }
    });




module.exports=
    router
