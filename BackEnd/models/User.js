const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: "String",
        required: true,
    },

    //NOTE/: У каждого пользователя свой массив ссылок
    links: [
        {
            //NOTE/: тип для линков. Types.ObjectId - ID от mongoDB
            type: Types.ObjectId,
            //NOTE/: Значение ref к какой коллекции мы привязываемся
            //NOTE/: Привязываемся к коллекции Link
            ref: "Link",
        },
    ],
});

module.exports = model("User", schema);
