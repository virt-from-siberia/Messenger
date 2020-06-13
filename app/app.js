const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const socket = require("socket.io");
const { createServer } = require("http");

const createRoutes = require("./routes/index.routes");

const app = express();

//NOTE/: Подключаем socket.io
const http = createServer(app);
const io = socket(http);

app.use(express.json({ extended: true }));

const PORT = config.get("post") || 5000;

createRoutes(app, io);

//   app.use(bodyParser.json({ extended: true }));
//   //NOTE/: middleware обновляет последнее посишение пользователя
//   app.use(updateLastSeen);

//   //NOTE/: FAKE JSON DIALOGS
//   app.use("/api", authMiddleware, require("./fake.routes"));
//   //NOTE/: test request
//   app.use("/api", authMiddleware, require("./test.routes"));

//   //NOTE/: Регистрация и логин
//   app.use("/api/auth", require("./auth.routes"));

//   //NOTE/:  Получить пользователя по id
//   //NOTE/:  Получить информацию о себе
//   //NOTE/: Удалить пользователя
//   app.use("/user", authMiddleware, require("./user.routes"));

//   //NOTE/: Получить все диалоги пользователя по id
//   //NOTE/: Создать диалог, с параметрами author и partner
//   app.use("/dialogs", authMiddleware, require("./dialogs.routes"));

//   //NOTE/: Получить все сообшения  по id диалогу
//   //NOTE/: создать диалог
//   app.use("/messages", authMiddleware, require("./messages.routes"));

//NOTE/: сервер socket.io
io.on("connection", (socket) => {
    console.log("SOCKED CONNECTED");
    socket.emit("CHAT:RECEIVE_MESSAGE", "lol");

    socket.on("CLIENT:SEND_MESSAGE", function (obj) {
        console.log(obj);
    });
});

async function start() {
    try {
        await mongoose.connect(config.get("mongoURL"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        http.listen(5000, () => {
            console.log(`:::APP HAS BEEN STARTED::: on POST :  ${PORT}`);
        });
    } catch (err) {
        //ERROR: CONSOLE LOG ===========>
        console.log("SERVER ERROR", err.message);
        process.exit(1);
    }
}

start();
