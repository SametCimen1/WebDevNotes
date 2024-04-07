import express from "express";
import bodyParser from "body-parser";
import path, {dirname} from 'path'
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.post('/submit', (req, res) => {
  const {street, pet} = req.body;
  const combined = street + " " + pet;
  console.log(combined);
  res.status(200).send("<h1>" + combined + "</h1>")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
