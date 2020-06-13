const { Router } = require("express");
const MessageController = require("../controllers/MessageController");
const io = require("socket.io");
const authMiddleware = require("../middleware/auth.middleware");
const router = Router();

const Message = new MessageController(io);

//NOTE/:  Получить все диалоги пользователя по id
router.get("", authMiddleware, Message.index);

//NOTE/: создать диалог
router.post("", authMiddleware, Message.create);

//NOTE/: создать диалог
router.delete("/:id", authMiddleware, Message.delete);

module.exports = router;
