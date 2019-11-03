const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');

const app = express();
const router = express.Router();

app.use(cors());


router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/test", (req, res) => {
  res.json({
    hello: "how to test!"
  });
});


app.use(`/.netlify/functions/api`, router);
app.use(`/.netlify/functions/api/test`, router);

module.exports = app;
module.exports.handler = serverless(app);
