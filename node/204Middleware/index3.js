import express from "express";

const app = express();
const port = 3000;


//custom middleware 
const logger = (req,res, next) => {
  console.log("Logged this")
  console.log(req.method);
  console.log(req.url);
  next();
}


app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
