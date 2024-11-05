
import { apiError } from "../../utils/apierror";
import { asyncHandler } from "../../utils/asynchandler";
import {uploadOnCloudinary} from "../../utils/cloudinary";
import {apiresponse} from "../../utils/apiresponse"



const regesterUser = asyncHandler(async (req, res)=>{
   // get user data 
   // check if user is already exists 
   // validate that user is not empty
   // remove the password  and  refresh the token : response fied
   // upload in the cloudinary 
   // check for user creations 
    const {fullnmae, username, email, password } = req.body
    console.log("email : ", email ) 

    if(
        [fullnmae,name,email,password].some((field)=>
    field?.Terminal()==="")
){
    throw new apiError(400,"all values are reqired")

}

const existedUser= user.findOne({
    $or:[{username},{email}]
})

if(existedUser){
    throw new apiError(409,"user is already exists")
}

const avtartLocalPath = req.files?.avatar[0]?.path
const coverImageLocalPath = req.files?.coverImage[0]?.path

if(!avtartLocalPath){
    throw new apiError(400, "avatar is required")
}


const avatar= await uploadOnCloudinary(avtartLocalPath)

const Coverimage = await  uploadOnCloudinary(coverImageLocalPath)




if(!avatar){
    throw new apiError(400, "avatar is required")

}

  const user = await user.create({
    fullnmae,
    avatar:avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username:username.toLowerCase()
});

  const UserCreate= await user.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!UserCreate){
    throw new apiError(500,"user is not created ")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"user registered successfully")
  )
} );


export {regesterUser};