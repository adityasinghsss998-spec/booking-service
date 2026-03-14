const { StatusCodes} = require('http-status-codes');
class Apperror extends Error{
    constructor(name,
      message,
      explaination,
      statuscode
      
      ){
        super();
        this.name=name,
        this.message=message,
        this.explaination=explaination,
        this.statuscode=statuscode
      }
}
module.exports=Apperror
