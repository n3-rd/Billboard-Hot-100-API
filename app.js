const express = require('express');
const app = express();
const { getChart } = require('billboard-top-100');
const { DateTime } = require("luxon");

app.get('/', (req, res)=>{
    res.send(`
    <div style="text-align:center">

    <h1>Unofficial Billboard API</h1>
    <h2>Instructions for use:</h2> <br/>
    <h3><a href="https://github.com/n3-rd/Billboard-Hot-100-API">Github Readme</a></h3>
    </div>
    `);
})


const date = DateTime.local().toFormat('yyyy-LL-dd');
console.log(date);

app.get("/charts",(req,res)=>{
    if(req.query.date){
    getChart('hot-100', req.query.date, (err, chart) => {
        if (err) console.log(err);

        res.send(chart);
    });
}else{
    getChart('hot-100', date, (err, chart) => {
        if (err) console.log(err);

        res.send(chart);
    });
    }
})


app.listen(3000, ()=>{
    console.log('Server is live on port 3000');
});