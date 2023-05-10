const express=require("express");
const BodyParser=require("body-parser");
const app =express();
const https=require('https');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/" ,function(req,res){

    res.sendFile(__dirname+"/index.html");




})


app.post("" ,function(req ,res){


//console.log(req.body.cityname);

console.log("Post recieved!");


const country=req.body.cityName;
const ApiKey="194dd24112b3750e3f7408510e0c699c"
const Units="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q="+country+"&units="+Units+"&appid="+ApiKey;
https.get(url ,function(response){


console.log(response.statusCode);

response.on("data" ,function(data){

const weatherData=JSON.parse(data);
const temp = weatherData.main.temp;
const description = weatherData.weather[0].description;
const icon= weatherData.weather[0].icon;
const imgUrl="http://openweathermap.org/img/wn/"+icon+"@2x.png"

res.write("<p>The weather is currently "+ description +"</p>" );
res.write("<h1>The temperature in "+ country+" is currently "+temp +" degrees celcius.</h1>" );
res.write("<img src="+ imgUrl +">");
res.send();

//res.send("<h1>The weather in Lebanon is "+temp +" Degrees celcuis </h1> <br> <h2>The weather is currently "+description +"</h2>");

})


});




})

/*


*/



app.listen(3000,function(){


console.log("The server is runing on port 3000");





})