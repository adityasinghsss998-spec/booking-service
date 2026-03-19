const {BookingRepository}=require('../repository/index')
const axios=require('axios')
const {FLIGHT_SERVICE_PATH}=require('../config/serverconfig');
const {ServiceError}=require('../utils/errors')
class BookingService{
   constructor(){
    this.bookingRepository=new BookingRepository();
   }
   async createBooking(data){
      try{
        
         const flightId=data.flightId
         let getFlightRequestUrl=`${FLIGHT_SERVICE_PATH}/api/v1/flight/${flightId}`
         const response=await axios.get(getFlightRequestUrl);
         const flightdata=response.data.data;
         
         let priceOfflight=flightdata.price;
         if(flightdata.totalSeats<data.NoOfSeats){
            throw new ServiceError('somehing went wrong in booking process','Insufficient no of seats');
         }
         const TotalCost=data.NoOfSeats*priceOfflight;
         const bookingpayload={...data,TotalCost};
         
         const booking =await this.bookingRepository.create(bookingpayload);
         const updateFlightRequestUrl=`${FLIGHT_SERVICE_PATH}/api/v1/flight/${booking.flightId}`;
         console.log({totalSeats:flightdata.totalSeats-booking.NoOfSeats})
         await axios.patch(updateFlightRequestUrl,{totalSeats:flightdata.totalSeats-booking.NoOfSeats});
         // console.log("from service layer",flight.data.data)
         const finalBooking=await this.bookingRepository.update(booking.id,{status:"Booked"});
         return finalBooking;
      }catch(e){
       console.log(e)
        throw new ServiceError();
      }
   }
}
module.exports=BookingService