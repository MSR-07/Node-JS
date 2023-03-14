const express = require("express");
const messageRouter = express.Router();
const messageControllers = require("../Controllers/messages.controller");

messageRouter.get("/message", messageControllers.getMessages);
messageRouter.post("/message", messageControllers.postMessages);

module.exports = messageRouter;
