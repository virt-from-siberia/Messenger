const express = require("express");
const MessageModel = require("../models/Message");

class MessageController {
    //Получить список сообщений по id диалога
    index(req, res) {
        //NOTE/: берем id диалога из req.params.id
        const dialogId = req.query.dialog;

        //NOTE/: Делаем запрос к бд, найти пользователя с таким id
        MessageModel.find({ dialog: dialogId })
            .populate(["dialog"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({
                        message: "Сообщение не найдено",
                    });
                }
                return res.json(messages);
            });
    }
    //Удолить пользователя по id
    //  delete(req, res) {
    //     //NOTE/: берем id пользователя из req.params.id
    //     const id = req.params.id;
    //     //NOTE/: Делаем запрос к бд, найти пользователя с таким id
    //     const user = await UserModel.findOneAndRemove({ _id: id });

    //     if (user) {
    //         res.json({
    //             message: "Пользователь удален",
    //         });
    //     } else {
    //         //NOTE/: Если пользователь не найден
    //         res.status(404).json({
    //             message: "Ошибка пользователь не найден",
    //         });
    //     }
    // }

    // //NOTE/: Получить информацию о себе
    // getMe() {}
}

module.exports = MessageController;
