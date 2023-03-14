function getMessages(req, res) {
  res.send("<ul><li>Hello, Jni...... </li></ul>");
}

function postMessages(req, res) {
  res.send("Updating Message..........");
}

module.exports = {
  getMessages,
  postMessages,
};
