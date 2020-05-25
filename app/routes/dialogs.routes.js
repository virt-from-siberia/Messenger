const { Router } = require("express");
const DialogController = require("../controllers/DialogController");
const router = Router();

const Dialog = new DialogController();

//NOTE/:  Получить все диалоги пользователя по id
router.get("/:id", Dialog.index);

//NOTE/:  Создать диалог, с параметрами author и partner
router.post("", Dialog.create);

//NOTE/:  Удалить диалог, с параметрами по id
router.delete("/:id", Dialog.delete);

module.exports = router;
