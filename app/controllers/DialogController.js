const express = require("express");
const DialogModel = require("../models/Dialog");

class DialogController {
    //Получить диалог по id автора
    index(req, res) {
        //NOTE/: берем id автора из req.params.id
        const authorId = req.params.id;
        //NOTE/: Делаем запрос к бд, найти пользователя с таким id
        DialogModel.find({ author: authorId })
            .then((dialogs) => {
                res.json(dialogs);
            })
            .catch((err) => {
                //NOTE/: Если диалоги не найден
                res.status(404).json({
                    message: "Диалоги не найден",
                });
            });
    }

    //NOTE/: создать диалог

    create(req, res) {
        const postData = {
            //NOTE/: получить id автора диалога из req.body.author
            author: req.body.author,
            //NOTE/: получить id партнера диалога из req.body.author
            partner: req.body.partner,
        };

        //NOTE/: Создаем новый диалог
        const dialog = new DialogModel(postData);

        //NOTE/: Сохраняем диалог в бд
        dialog
            .save(obj)
            .then(() => {
                res.json();
            })
            .catch((reason) => {
                res.json(reason);
            });
    }
}

module.exports = DialogController;
