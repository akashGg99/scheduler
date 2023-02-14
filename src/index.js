const express = require('express');
const bodyParser = require('body-parser')
const moment = require('moment/moment');
const app = express();
const nodeCron = require("node-cron")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.listen(3001, ()=> console.log("Running on port 3001..."))


//accessing date from the user on "/" route to use in node-cron schedule function for time interval inputs...
app.post("/",(req,res)=>{
    const arr = req.body

    let userText = arr[0].text

    //spliting array with - to get subarrays of date,year , time etc...
    let year = arr[0].datetime.split("-")
    console.log(year)

});



//cron job
nodeCron.schedule("*/10 * * * * *", () => console.log("Some cron task running ..... ", moment().format("Do MM YYYY, h:mm:ss a")));




// let arr= ["2020-07-10 15:00:00.000"]
// let str= "2020-07-10 15:00:00.000"
// console.log(str.split(""));
// console.log(str.split(" "));
// console.log(str.split("2020"));
// console.log(str.split("-"));





// nodeCron.schedule("*/10 * * * * *", () => console.log("Some cron task running ..... "))