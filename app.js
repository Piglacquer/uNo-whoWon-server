const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const data = require("./Data/data")

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  console.log('GET');
  response.json(data.dataSet);
});

app.post("/", (request, response) => {
  response.json("post worked");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
});
