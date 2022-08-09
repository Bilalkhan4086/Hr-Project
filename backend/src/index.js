const express = require("express");
const app = express();
const port = 5000;
const connection = require('./mongodb/connection')
const addPost = require('./functions/addPost')
const addComment = require('./functions/addComment')
const getAllData = require('./functions/getAllData')
const getPostById = require('./functions/getPostById')
const bodyParser = require('body-parser');
// const upload = require("../lib/uploads")
const cors = require("cors")
app.use(bodyParser.json());
const options = {
  origin:"http://localhost:8000"
}
app.use(cors(options));





app.get("/getAllData",async (req, res) => {
  connection();
  const data = await getAllData();
  res.send(data);
});

app.get("/getPostById",async (req, res) => {
  connection();
  const data = await getPostById({id:req.query.id});
  console.log(data)
  res.send(data); 
});


app.post("/addPost", async (req, res) => {
  connection();
  const response = await addPost({body:req.body});
  res.send(response)
});


app.post("/addComment",async (req, res) => {
  connection();
  const data =await addComment(req.body);
  res.send(data);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});