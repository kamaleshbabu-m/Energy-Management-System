const express = require('express');
const db = require('./config/db')
const cors = require('cors')
const app = express();
const  PORT = 3002;
app.use(cors());
app.use(express.json());

app.post('/api/login',function(req,res){
  const username=req.params.username;
  const password=req.params.password;
 db.query('SELECT * FROM userdetails2 where userdetloginname =? and userdetpassword =? ',[username,password], function (error, results, fields){
        if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"Error"
    })
  }else{
    console.log('Results: ', results);

    res.send({
      "code":200,
      "success":Results
        });
  }
  });



});



app.get("/api/login/:username/:password", (req,res)=>{
  const username=req.params.username;
  const password=req.params.password;
   
 //  where userdetloginname = ? and userdetpassword = ?,username,password
db.query("SELECT userdetemailid FROM userdetails2 where userdetloginname =? and userdetpassword=?",[username,password],(err,result)=>{
    if(err) {
    console.log(err)
    res.send(err)
    } 
    else{
       console.log(result) 
       res.send(result)
    }

}
    );   
});

 


app.get("/api/getevuserdetails", (req,res)=>{
db.query("SELECT * FROM evuserdetail", (err,result)=>{
    if(err) {
    console.log(err)
    res.send(err)
    } 
    else{
       console.log(result) 
       res.send(result)
    }

}
    );   
});

app.get("/api/getsessiondetails", (req,res)=>{
db.query("select cpstationname as chargestation,cpchargertype as chargetype ,cmsotpgenerationcpid as cpid, concat(evuserfirstname,"+'" "'+",evuserlastname) as username,cmsotpgenerationpasscode as sessionid, cpstarttransactiontimestamp as starttime, cpstoptransactiontimestamp as stoptime, cpstoptransactionmetervalue as consumedenergy, timeofdaycalculationslottotalamount as amount from cmsotpgeneration join evuserdetail on cmsotpgenerationevuserid = evuserid join cpstarttransaction on cmsotpgenerationpasscode = cpstarttransactionuserauthidtag join cpstoptransaction on cmsotpgenerationpasscode = cpstoptransactionuserauthidtag join cpdetail on cpdetailid=cmsotpgenerationcpid join cpstationdetail on cpdetailcpstationid=cpstationid join timeofdaycalculation on cmsotpgenerationpasscode=timeofdaycalculationidtag   join cpownerdetail on cpownerid=cpstationcpownerid order by cpstarttransactiontimestamp DESC",(err,result)=>{
    if(err) {
    console.log(err)
    res.send(err)
    } 
    else{
       console.log(result) 
       res.send(result)
    }

}
    );   
});

app.get("/api/chargeutilisation", (req,res)=>{
db.query("select cpdetailid as cpid,round(sum(timeofdaycalculationdiffinminutes)/60,2) as x1axis,round(sum(timeofdaycalculationslottotalamount),2) as x2axis from timeofdaycalculation join cpdetail on timeofdaycalculationcpid=cpdetailid group by cpdetailid",(err,result)=>{
    if(err) {
    console.log(err)
    res.send(err)
    } 
    else{
       console.log(result) 
       res.send(result)
    }

}
    );   
});



 app.post('/api/register',function(req,res){
 const name=req.body.name;
 const mail=req.body.mail;
 const phone=req.body.phone;
 const gender=req.body.gender;
  const password=req.body.password;
 const adminstate=1;
   
 db.query("INSERT INTO `userdetails2` (`userdetloginname`, `userdetpassword`, `userdetemailid`, `userdetphonenumber`, `userdetadminstate`, `userdetgender`) VALUES(? , ?, ? , ? , ? , ?)",[name , password,mail, phone,adminstate,gender], function (error, results, fields){
        if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error",
    })
  }else{
    console.log('Results: ', results);

    res.send({
      "code":200,
      "success":results,

        });
  }
  });



});


app.post('/api/reg',function(req,res){
  const name=req.body.name;
  const mail='ab@ib.c';
  const phone='1221';
  const gender='male';
   const password='123456';
  const adminstate=1; 
   res.send("Request:"+req.body.name+"\n"+req.body);
 
 
 
 });
 
 

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})