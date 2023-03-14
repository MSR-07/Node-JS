function getFriends(req, res) {
  res.json(friends);
}

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exit.",
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing Friend Name.",
    });
  } else {
    const newFriend = {
      name: req.body.name,
      id: friends.length,
    };
    friends.push(newFriend);

    res.json(newFriend);
  }
}
module.exports = {
  getFriends,
  getFriendById,
  postFriend,
};
