
import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const Userschema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,

        },
        fullname:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            index:true,

        },
        avatar:{
            type:String,// cloudinary url
            required:true,
            
        },
        coverImage:{
                 type:required,



        }, watchHistory:[{
            type:Schema.Types.ObjectId,
            ref:"videos"
        }],
        Password:{
            type:string,
            required:[true,'password is required'],

        },
        refreshToken:{
            type:string,
        },
        timestamp:true
    })

    Userschema.pre("save",async function(next){
        if(!this.isModified("password")) return next();
        this.Password =bcrypt.hash(this.Password,10)
        next ();
    })

    Userschema.methods.isPasswordCorrect = async function (password){
          return await bcrypt.compare(password,this.password)
    }

    Userschema.methods.generateAcessToken = function(){
       return jwt.sign({
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname,
        },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
      }
    )
    }
    
    Userschema.methods.generateAcessToken = function(){
        return jwt.sign({
            _id:this._id,
          
        },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
      }
    )
    }

export const User = mongoose.model("user",Userschema)
