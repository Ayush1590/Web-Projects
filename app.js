const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({encoded:true}));
app.use(express.static("public"));
let items=["cook for me", "write book","sleep time"];
app.set("view engine", "ejs"); //it sets the view engine of express as  ejs and instead of usin res.send we use res.render
let workitems=[];
app.get("/", function(req, res) {
  // // code for testing weekend day
  // //getDay() gets day as a number
  let today = new Date();
  let options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day=today.toLocaleDateString("en-US",options) ;  //converts date to a string returuning date conventions using local convention //adds local like region hi-in or en-us and our options what we want represent
  
  res.render("list",{listTitle:day,newListitems:items});
 
})
app.post("/",function(req,res){
  let item=req.body.newItem;
  if(req.body.list === "Work"){
     workitems.push(item);
     res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

})
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListitems:workitems});
})
// app.post("/work",function(req,res){
//   let item=req.body.newItem;
//   workitems.push(item);
//   res.redirect("/work");
//   })

app.listen(3000, function() {
  console.log("server started on port 3000")
})
