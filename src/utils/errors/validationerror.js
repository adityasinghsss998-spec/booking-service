const {StatusCodes}=require('http-status-codes');
class ValidationError extends Error{
  constructor(error) {
    super();
   let explaination=[];
   error.errors.forEach(err => {
    explaination.push(err.message)
   });
   this.name="validation error",
   this.message="Not able to validate the data",
   this.explaination=explaination,
   this.statuscode=StatusCodes.BAD_REQUEST
  }
}