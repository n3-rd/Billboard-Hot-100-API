const express = require('express');
const app = express();
const { getChart } = require('billboard-top-100');
const { DateTime } = require("luxon");

app.get('/', (req, res)=>{
    res.send('Hello World, site is live');
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
    }).then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    }
    )}
})


app.listen(3000, ()=>{
    console.log('Server is live on port 3000');
});