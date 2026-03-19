const express=require('express');
const router=express.Router();
const  {Bookingcontroller}=require('../../controllers/index')
router.post('/bookings',Bookingcontroller.create)
module.exports=router