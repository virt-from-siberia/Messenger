const { Router } = require("express");
const UserController = require("../controllers/UserController");
const router = Router();

const User = new UserController();

//NOTE/:  Получить пользователя по id
router.get("/me", User.getMe);

//NOTE/: Удалить пользователя по id
router.delete("/:id", User.delete);

module.exports = router;
