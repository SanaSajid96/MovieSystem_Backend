const Movie= require('../models/movie.model');
const express=require('express');
const bcrypt=require('bcrypt');
const auth = require('../middleware/auth.middleware');


const router=express.Router();



router.post('/movie',auth, async(req,res)=>{
    try{
    const{name,category,actor}=req.body;

    const ispresent=await Movie.findOne({name})
    if(!ispresent){
 const moviecreate=await Movie.create({name,category,actor})
 return res.send(moviecreate)
    }
    res.status(405).send("movie already exist")
}
catch(err){
    res.send({error:err.message})
}
})

router.get('/movielisting',async(req,res)=>{
    try{
   
      const movies=await Movie.find()
    
    res.status(205).send(movies)
}
catch(err){
    res.send({error:err.message})
}
})
module.exports=
    router
