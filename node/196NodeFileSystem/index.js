const fs = require("node:fs");

fs.writeFile('message.txt', 'new Text', (err) => {
    if (err) throw err;
})


fs.readFile('./message.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`data: ${data}`)
})