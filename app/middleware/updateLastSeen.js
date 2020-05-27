const express = require("express");
const UserModel = require("../models/User");

//NOTE/: middleware обновляет последнее посишение пользователя
//NOTE/: Каждый раз когда происходит обрашение к серверу
module.exports = (_, __, next) => {
    //BUG: Врененный id пользователя для обновления
    UserModel.findOneAndUpdate(
        //NOTE/: Первый параметр - что искать
        { _id: "5eca3261568eea35740d7bc8" },
        //NOTE/: Второй параметр - что обновлять
        {
            last_seen: new Date(),
        },
        { new: true },
        () => {}
    );
    next();
};
