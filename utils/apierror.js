class apiError extends error {
    constructor(
        statusccode,

        message= "somethingh went wrong",
        errors = [],
        statck = "",

    ){
        super(message)
        this.statusccode= statusccode
        this.data =null
        this.message = message 
        this.success = false
        this.errors = errors


        if(statck){
            this.statck = statck
        }else{

                errors.captureStatkTrace(this.this.cosntructor)
        }
    }
}