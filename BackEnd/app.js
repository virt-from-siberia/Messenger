const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"));

const PORT = config.get("post") || 5000;

async function start() {
    try {
        await mongoose.connect(config.get("mongoURL"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
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
