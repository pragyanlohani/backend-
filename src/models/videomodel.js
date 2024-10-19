import mongoose,{schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-paginate-v2"

const videoSchema= new schema({

    videofile:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:number,
        required:true,
    },
    views:{
        type:number,
        default:0,
    },
    isPublised:{
        type:boolean,
        default:true,
    },
    owner:{
        type:schema.Type.objectId,
        ref:user,

    },

},

{
    timestamp:true
})



videoSchema.plugin(mongooseAggregatePaginate)


export const video = mongoose.model("video" ,videoSchema)