console.log("Server Side Logs");

const express = require("express");
const request = require("request");
const path = require("path");

const app = express();
app.use(express.static("public"));

const PORT = 80;
const App2DomainName = process.env.App2DomainName || "jsonplaceholder.typicode.com/todos/1";

app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "../public/index.html");
  console.log("Requesting App1");
  res.status(200);
  res.sendFile(indexPath);
});

app.get("/app2", (req, res) => {
  request("http://" + App2DomainName, function (error, response, body) {
    console.log("Requesting App2");
    if (error) {
      console.error(error);
      return res.status(500).send("An error occurred");
    }
    res.send(body);
  });
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
