const express = require("express");
const router = new express.Router();
const cors = require("cors");

const Users = require("../models/users");

router.post("/", async (req, res) => {
  try {
    const user = new Users(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});


router.get("/", async (req, res) => {
  try {
    const userData = await Users.find();
    res.status(200).send(userData);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;