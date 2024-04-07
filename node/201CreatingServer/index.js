import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {
  res.send("<h1>Hello</h1>");
})

app.get('/contact', (req, res) => {
  res.send("<a href='tel:123-456-7890'>123-456-7890</a>")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


