class apiError extends error {
    constructor(
        statusccode,

        message= "somethingh went wrong",
        errors = [],
        stack = "",

    ){
        super(message)
        this.statusccode= statusccode
        this.data =null
        this.message = message 
        this.success = false
        this.errors = errors


        if(stack){
            this.stack = stack
        }else{

                errors.captureStatkTrace(this.this.cosntructor)
        }
    }
}

export{apiError}