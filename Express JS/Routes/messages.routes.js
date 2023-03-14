const express = require("express");
const messageRouter = express.Router();
const messageControllers = require("../Controllers/messages.controller");

messageRouter.get("/", messageControllers.getMessages);
messageRouter.post("/", messageControllers.postMessages);

module.exports = messageRouter;
