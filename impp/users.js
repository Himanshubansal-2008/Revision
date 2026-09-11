const express = require('express')
const router = express.Router();


router.get("/users", (req, res) => {
  res.send("List of users");
});

router.get("/users/:userId", (req, res) => {
  res.send(`User with id ${req.params.userId}`);
});

router.post("/users", (req, res) => {
  res.send("Creating users");
});

router.delete("/users/:userId", (req, res) => {
  res.send(`Deleting users with id ${userId}`)
});


module.exports = router;