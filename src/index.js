const express=require('express');
const bodyparser=require('body-parser');
const PORT=require('./config/serverconfig');
const app=express();
const apiroutes=require('./routes/index');
const db=require('./models/index');
const setupansstart=()=>{ 
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({extended:true}));
  app.use('/api',apiroutes);
  app.listen(PORT,()=>{
    console.log("server started on port",PORT);
    if(process.env.sync({alter:true}));
  })
}
setupansstart()