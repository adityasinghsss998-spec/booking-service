
const {BookingService}=require('../services/index')
const bookingservice=new BookingService();
const {StatusCodes}=require('http-status-codes')
const create=async (req,res)=>{
  try{
    const response=await bookingservice.createBooking(req.body);
    console.log(response)
    // console.log("from controller",response)
    return res.status(StatusCodes.OK).json({
      message:"successfully completed booking",
      data:response,
      success:true,
      err:{}
    })
  }catch(e){
    console.log(e)
     return res.status(e.statuscode).json({
      message:e.message,
      data:{},
      success:false,
      err:e.explaination
    })
  }
}
module.exports={
  create
}