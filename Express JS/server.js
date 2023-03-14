const express = require("express");
const friendsRoute = require("./Routes/friends.routes");
const messageRoute = require("./Routes/messages.routes");
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}/${req.url} ${delta}ms`);
});

app.use(express.json());

app.use("/friend", friendsRoute);
app.use("/message", messageRoute);

app.get("/", (req, res) => {
  res.send("Hello , Buddy..............!");
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}.......`);
});
