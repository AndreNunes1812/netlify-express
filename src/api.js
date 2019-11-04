const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", cors(), (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/test", cors(), (req, res) => {
  res.json({
    hello: "how to test!"
  });
});

app.use(`/.netlify/functions/api`, router);
app.use(`/.netlify/functions/api/test`, router);

module.exports = app;
module.exports.handler = serverless(app);
