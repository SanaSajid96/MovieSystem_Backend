const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const UserScheme=mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            required:true,
            default:"admin"
        }
    }
   
)
UserScheme.pre("save",function(next){
    const hash =bcrypt.hashSync(this.password,11)
    this.password=hash;
    next();
})
const User=mongoose.model("users",UserScheme)
module.exports=
User
