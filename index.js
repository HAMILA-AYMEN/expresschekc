

const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();

const logger=(req,res,next)=>{
  var today = new Date();
  
  if(today.getDay() == 6 || today.getDay() == 0 && today.getHours()<9 || today.getHours()>17) {
    return res.write("<h1>The web application is only available during working hours <br> (Monday to Friday,  from 9 to 17).</h1>");
  }
  
  next();
}

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/Home',logger,function(req,res){
  res.sendFile(path.join(__dirname+'/Home.html'));
  
  //__dirname : It will resolve to your project folder.
});
router.get('/Service',logger,function(req,res){
  res.sendFile(path.join(__dirname+'/Service.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/Contact',logger,function(req,res){
  res.sendFile(path.join(__dirname+'/Contact.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/public/index.css',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.css'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');