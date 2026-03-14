const{ValidationError,Apperror,ServiceError}=require('../utils/errors/index')
const {Booking}=require('../models/booking');
const{StatusCodes}=require('http-status-codes')
class BookingRepository{
   async create(data){
    try{
      const booking=await Booking.create(data);
      return booking
    }catch(e){
      if(e.name=="SequelizeValidationError"){
        throw new ValidationError(e);
      }
      throw new Apperror('RepositoryError',
        "cannot create booking",
        "there was some issue on creating the bookiing,please try again",
        StatusCodes.INTERNAL_SERVER_ERROR
      )
    }
   }
}
module.exports=BookingRepository