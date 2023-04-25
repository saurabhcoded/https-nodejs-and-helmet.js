const express = require("express");
const app = express();
const https = require("https");
const helmet = require("helmet");
const fs = require("fs");

app.use(helmet());
app.get("/", (req, res) => {
  return res.send("Secret");
});

https
  .createServer(
    {
      key: fs.readFileSync("privatekey.key"),
      cert: fs.readFileSync("certificate.crt"),
    },
    app
  )
  .listen(80, () => {
    console.log(`App is runnin`);
  });
