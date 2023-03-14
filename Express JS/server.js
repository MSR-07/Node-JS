const express = require("express");
const app = express();

const PORT = 3000;
const friends = [
  {
    id: 0,
    name: "Umer Bhi",
  },
  {
    id: 1,
    name: "Hamza Bhi",
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send("Hello , Buddy..............!");
});

app.get("/friend", (req, res) => {
  res.json(friends);
});

app.get("/friend/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exit.",
    });
  }
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
