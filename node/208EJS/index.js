import express from 'express';
import bodyParser from 'body-parser'
import { dirname } from "path";
import { fileURLToPath } from "url";


const app = express();

app.get('/', (req, res) => {
    const day = new Date().getDay();
    
    if(day == 6 || day == 0){
        res.render("index.ejs", {
            dayType: "A weekday",
            advice: "work hard"
        })
    }else{
        res.render("index.ejs", {
            dayType: "A weekend",
            advice: "rest"
        })
    }

})

app.listen(3000, ()=>{
    console.log(`litening on port: 3000`)
})