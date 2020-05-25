const express = require("express");
const DialogModel = require("../models/Dialog");
// const UserModel = require("../models/Dialog");

class DialogController {
    //Получить диалог по id автора
    index(req, res) {
        const authorId = req.params.id;

        DialogModel.find({ author: authorId })
            //NOTE/: populate  "author" - получить автора диалога с данными
            //NOTE/: populate  "partner" - получить партнера диалога с данными
            .populate(["author", "partner"])
            .exec(function (err, dialogs) {
                if (err) {
                    return res.status(404).json({
                        message: "dialog not found",
                    });
                }
                return res.json(dialogs);
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
            .save()
            .then((data) => {
                res.json(data);
            })
            .catch((reason) => {
                res.json(reason);
            });
    }
    delete(req, res) {
        const id = req.params.id;
        DialogModel.findByIdAndRemove({ _id: id })
            .then((dialog) => {
                if (dialog) {
                    res.json({
                        message: "Диалог удалён",
                    });
                }
            })
            .catch(() => {
                res.json({
                    message: "Диалог не найден",
                });
            });
    }
}

module.exports = DialogController;
