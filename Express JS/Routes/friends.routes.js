const express = require("express");
const friendRouter = express.Router();
const friendsControllers = require("../Controllers/friends.controller");

friendRouter.get("/friend", friendsControllers.getFriends);
friendRouter.get("/friend/:friendId", friendsControllers.getFriendById);
friendRouter.post("/friend", friendsControllers.postFriend);

module.exports = friendRouter;
