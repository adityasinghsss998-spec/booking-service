const { StatusCodes} = require('http-status-codes');
class ServiceError extends Error{
    constructor(message="Something went wrong",
      explaination="Service layer error",
      statuscode=StatusCodes.INTERNAL_SERVER_ERROR
      ){
        super();
        this.name='Service Error',
        this.message=message,
        this.explaination=explaination,
        this.statuscode=statuscode
      }
}
module.exports=ServiceError
