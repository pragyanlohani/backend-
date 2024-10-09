const asyncHandeller = (fn) => async (err,req,res,next) => {
    try{

        await fn (req,res,next)
    }catch(err){
        res.status(err.code || 500, json({
            sucess:false,
            message:err.mesage
        }))

    }

}

export {asyncHandeller};