const { Schema, model, Types } = require("mongoose");

const MessageSchema = new Schema(
    //NOTE/: Первый параметр обьект который содержит схему
    {
        text: { type: String, required: true },
        unread: Boolean,
        //NOTE/: lastMessage последнее сообщение принемает параметр id диалога
        lastMessage: { type: Schema.Types.ObjectId, ref: "Dialog" },
    },
    //NOTE/: Второй параметр это обьект, содержит конфигурацию схемы
    {
        //NOTE/: timestamps - true, Создавать два дополнительных поля :
        //NOTE/: created_at, updated_at
        timestamps: true,
    }
);

//NOTE/: создаем модель User и экспортируемы
module.exports = model("Message", MessageSchema);
