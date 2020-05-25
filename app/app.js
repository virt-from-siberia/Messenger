const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json({ extended: true }));

app.use(bodyParser.json({ extended: true }));

//NOTE/: Регистрация и логин
app.use("/api/auth", require("./routes/auth.routes"));
//NOTE/: FAKE JSON DIALOGS
app.use("/api", require("./routes/fake.routes"));
//NOTE/: test request
app.use("/api", require("./routes/test.routes"));

//NOTE/:  Получить пользователя по id
//NOTE/:  Получить информацию о себе
//NOTE/: Удалить пользователя
app.use("/user", require("./routes/user.routes"));

//NOTE/: Получить все диалоги пользователя по id
//NOTE/: Создать диалог, с параметрами author и partner
app.use("/dialogs", require("./routes/dialogs.routes"));

const PORT = config.get("post") || 5000;

async function start() {
    try {
        await mongoose.connect(config.get("mongoURL"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        app.listen(5000, () => {
            console.log(`:::APP HAS BEEN STARTED::: on POST :  ${PORT}`);
        });
    } catch (err) {
        //ERROR: CONSOLE LOG ===========>
        console.log("SERVER ERROR", err.message);
        process.exit(1);
    }
}

start();
