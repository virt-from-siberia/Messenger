const { Router } = require("express");
const MessageController = require("../controllers/MessageController");
const router = Router();

const Message = new MessageController();

//NOTE/:  Получить все диалоги пользователя по id
router.get("", Message.index);

module.exports = router;
