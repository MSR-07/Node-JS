const express = require("express");
const friendRouter = express.Router();
const friendsControllers = require("../Controllers/friends.controller");

friendRouter.get("/", friendsControllers.getFriends);
friendRouter.get("/:friendId", friendsControllers.getFriendById);
friendRouter.post("/", friendsControllers.postFriend);

module.exports = friendRouter;
