const express = require("express");
const messageControllers = require("./Controllers/messages.controller");
const friendsControllers = require("./Controllers/friends.controller");
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello , Buddy..............!");
});

app.get("/friend", friendsControllers.getFriends);

app.get("/friend/:friendId", friendsControllers.getFriendById);

app.post("/friend", friendsControllers.postFriend);

app.get("/message", messageControllers.getMessages);

app.post("/message", messageControllers.postMessages);

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}.......`);
});
