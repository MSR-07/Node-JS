const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello , Buddy..............!");
});

app.get("/message", (req, res) => {
  res.send("<ul><li>Hello, Jni...... </li></ul>");
});

app.post("/message", (req, res) => {
  res.send("Updating Message..........");
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}.......`);
});
