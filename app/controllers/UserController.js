const express = require("express");
const UserModel = require("../models/User");

class UserController {
    //Получить пользователя по id
    async show(req, res) {
        //NOTE/: берем id пользователя из req.params.id
        const id = req.params.id;
        //NOTE/: Делаем запрос к бд, найти пользователя с таким id
        await UserModel.findById(id)
            .then((user) => {
                res.json(user);
            })
            .catch((err) => {
                //NOTE/: Если пользователь не найден
                res.status(404).json({
                    message: "Пользователь не найден",
                });
            });
    }
    //Удолить пользователя по id
    async delete(req, res) {
        //NOTE/: берем id пользователя из req.params.id
        const id = req.params.id;
        //NOTE/: Делаем запрос к бд, найти пользователя с таким id
        const user = await UserModel.findOneAndRemove({ _id: id });

        if (user) {
            res.json({
                message: "Пользователь удален",
            });
        } else {
            //NOTE/: Если пользователь не найден
            res.status(404).json({
                message: "Ошибка пользователь не найден",
            });
        }
    }

    //NOTE/: Получить информацию о себе
    getMe() {}
}

module.exports = UserController;
