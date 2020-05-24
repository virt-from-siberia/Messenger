const { Router } = require("express");
const UserController = require("../controllers/UserController");
const router = Router();

const User = new UserController();
router.post("/:id", User.index);
router.delete("/:id", User.delete);

module.exports = router;
