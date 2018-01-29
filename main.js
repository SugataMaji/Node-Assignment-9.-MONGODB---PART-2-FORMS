var express=require("express");
var path = require("path");
var bodyparser = require("body-parser");
var app = express();
app.use(bodyparser.json()); // support json encoded bodies
app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies
app.get("/",function(req,resp){
resp.sendFile(path.join(__dirname+"/form.html"));
});
app.post("/",function(req,resp){
var msg="<table style='border: 1px solid black;'><tr><td  style='border: 1px solid black;' colspan='2'>Employee Details </td></tr><tr><td  style='border: 1px solid black;'><b>Name</b></td><td  style='border: 1px solid black;'>"
+req.body.name +"</td></tr><tr><td  style='border: 1px solid black;'><b>Email</b></td><td  style='border: 1px solid black;'>"
+req.body.email +"</td></tr><tr><td  style='border: 1px solid black;'><b>Phone</b></td><td  style='border: 1px solid black;'>"
+req.body.phone +"</td></tr><tr><td  style='border: 1px solid black;'><b>Designation</b></td><td  style='border: 1px solid black;'>"
+req.body.designation +"</td></tr><tr><td  style='border: 1px solid black;'><b>Company</b></td><td  style='border: 1px solid black;'>"+req.body.company +"</td></tr></table>";
resp.send(msg);
});
app.listen(9000,function(){
console.log("Server started listening");
});