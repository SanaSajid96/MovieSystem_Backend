const express=require('express');
const app=express();
app.use(express.json());
const connect=require('../src/config/db');
require('dotenv').config();
const userController=require('../src/controllers/user.controllers')
const movieController=require('../src/controllers/movie.controllers')
const port = process.env.PORT || 5000; // Use the PORT variable from .env or default to 3000

app.use("/user",userController);
app.use("/movielist",movieController)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });