const mongoose=require('mongoose');
const MovieScheme=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        actor:{type:mongoose.Schema.Types.ObjectId,ref:"User",
        
    },
    }
)
const Movie=mongoose.model("movies",MovieScheme)
module.exports=
    Movie
