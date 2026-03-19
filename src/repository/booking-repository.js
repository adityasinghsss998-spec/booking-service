const{ValidationError,Apperror,ServiceError}=require('../utils/errors/index')
const {BOOKING}=require('../models/index');
const{StatusCodes}=require('http-status-codes');
const { BLOB } = require('sequelize');

class BookingRepository{
   async create(data){
    try{
      console.log(data)
      const booking=await BOOKING.create(data);
      return booking
    }catch(e){
      console.log(e);
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
    async update(bookingId,data){
     try{
      const booking=await BOOKING.findByPk(bookingId);
      if(data.status){
        booking.status=data.status;
      }
      await booking.save();
      return booking;
    } catch(e){
      throw new Apperror('RepositoryError',
         "cannot update booking",
         "there was some issue on updating the bookiing,please try again",
         StatusCodes.INTERNAL_SERVER_ERROR
     )
    }
   }
}
module.exports=BookingRepository