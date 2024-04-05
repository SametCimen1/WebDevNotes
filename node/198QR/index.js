import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs'


var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('i_love_qr.svg'));


inquirer
  .prompt([
   {
    name: "url",
    message:"What's the URL?",
    type:'input'
   }
  ])
  .then((answers) => {
    
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });