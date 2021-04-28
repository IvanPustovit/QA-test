const User = require("../Models/UserModel");
const dbReq = require("../utils/DBReq");

class UserController {
  async getUser(req, res) {
    try {
      const users = await dbReq.find(User);
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }

  async postUser(req, res) {
    try {
      const { name } = req.body;
      const user = new User({
        name,
      });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  }
}

module.exports = new UserController();
