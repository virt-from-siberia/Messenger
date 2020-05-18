const { Router } = require("express");
const bcrypt = require("bcrypt");
const config = require("config");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = Router();

//NOTE/: Path /api/auth/
//NOTE/: Registration
router.post(
    "/register",
    //NOTE/: Массив middleware
    [
        //NOTE/: Метод check от express-validator, проверка email
        check("email", "Некорректный Email").isEmail(),
        check(
            "password",
            "Минимальная длина пароля минимум 6 символов"
        ).isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        try {
            //FIXME: CONSOLE LOG ===========>
            console.log(" Body : ", req.body);

            //NOTE/: Передаем express-validator req для валидации, все ошибки будут сложины в const errors

            const errors = validationResult(req);
            //NOTE/: проверяем  если НЕ пустой
            if (!errors.isEmpty()) {
                //NOTE/: Возврашяем ошибки на фронт
                return res.status(400).json({
                    //NOTE/: Приводим к массиву errors и передаем в обькет errors
                    errors: errors.array(),
                    message: "Некорректные данные при регистрации",
                });
            }

            const { email, password } = req.body;
            //NOTE/: Логика регистрации
            //NOTE/: Проверка есть ли такой полььзователь в базе
            //NOTE/: Ожидаем пока модель полььзователя будет найдена по Email
            const candidate = await User.findOne({ email: email });

            //NOTE/: Если пользователь с таким email уже найден
            if (candidate) {
                //NOTE/: return что бы дальше скрипт не шол
                return res.status(400).json({
                    message: "Такой пользователь уже существует",
                });
            }

            //NOTE/: Если пользователь с таким email НЕ найден то тогда регестрируем нового пользователя

            //NOTE/: хэширум пароль в bcrypt
            //NOTE/: Передаем в bcrypt password который мы получили от req.body
            const hashedPassword = await bcrypt.hash(password, 12);

            //NOTE/: Создаем нового пользователя
            //NOTE/: В email ложим email который пришол от req.body
            //NOTE/: В password ложим hashedPassword который был уже захеширован bcrypt
            const user = new User({
                email: email,
                password: hashedPassword,
            });
            //NOTE/: ждем пока пользователь сохранится
            await user.save();

            //NOTE/: после сохранения позьзователя в db ответ фронту
            res.status(201).json({
                message: "Пользователь создан",
            });
        } catch (err) {
            res.status(500).json({
                message: "Что то пошло не так, попробуйте снова",
            });
        }
    }
);

//NOTE/: Path /api/auth/
//NOTE/: Login
router.post(
    "/login",
    //NOTE/: Массив middleware
    [
        check("email", "Введите коррекнтый Email").isEmail(),
        check("password", "Введите парль").exists(),
    ],
    async (req, res) => {
        try {
            //NOTE/: Передаем express-validator req для валидации, все ошибки будут сложины в const errors

            const errors = validationResult(req);
            //NOTE/: проверяем  если НЕ пустой
            if (!errors.isEmpty()) {
                //NOTE/: Возврашяем ошибки на фронт
                return res.status(400).json({
                    //NOTE/: Приводим к массиву errors и передаем в обькет errors
                    errors: errors.array(),
                    message: "Некорректные данные при входе в систему",
                });
            }
            //NOTE/: Логика по созданию пользователя
            //NOTE/: Получаем поля email, password из req.body
            const { email, password } = req.body;

            //NOTE/: Ишем ОДНОГО(findOne) полььзователя d в db
            //NOTE/: Ишем по email
            const user = await User.findOne({ email: email });

            //NOTE/: Если нет такого пользователя то
            if (!user) {
                return res.status(400).json({
                    message: "Поьзователь не найден",
                });
            }
            //NOTE/: Если ползовател найден то
            //NOTE/: Спавниваем через bcrypt.compare password которыйпришол от  фронта и
            //NOTE/: user.password который пришол с db
            isMatch = await bcrypt.compare(password, user.password);

            //NOTE/: Если пароли НЕ совподают
            if (!isMatch) {
                return res.status(400).json({
                    message: "Неверный пароль",
                });
            }

            //NOTE/: Ползователь найден далле
            //NOTE/: Создаем jwt token

            const token = jwt.sign(
                //NOTE/: Первый параметр обььект, где указываем данные, которые будут зашифрованы в данном jwt токене
                //NOTE/: Ложим в userId => user.id который берется от user.id из db
                { userId: user.id },
                //NOTE/: Второй параметр ложим секретное слово из config.get('jwtSecret)
                config.get("jwtSecret"),
                //NOTE/: Третий параметр через сколько jwt token закончит свое сушествование
                { expiresIn: "7d" }
            );
            //NOTE/: Итог ответ фронту
            //NOTE/: Отправляем token и userId
            res.json({
                token: token,
                userId: user.id,
            });
        } catch (err) {
            res.status(500).json({
                message: "Что то пошло не так, попробуйте снова",
            });
        }
    }
);

//NOTE/: FAKE
const data = {
    "dialogs ": [
        {
            _id: "1",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 1,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
        {
            _id: "2",
            text: "We are the champions!!! Our ",
            isRead: false,
            created_at: "Wed May 11 2020 12:46:19 ",
            user: {
                _id: 2,
                fullname: "Maksim Elchin",
                avatar:
                    "https://sun9-2.userapi.com/c858224/v858224987/1cd45f/wS-2xDSX9t8.jpg?ava=1",
                isOnline: true,
            },
        },
        {
            _id: "3",
            text: " we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 11:26:19 ",
            user: {
                _id: 3,
                fullname: "Ivan Elchin",
                avatar: null,
                isOnline: false,
            },
        },
        {
            _id: "4",
            text: " Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 4,
                fullname: "Daneil Elchin",
                avatar:
                    "https://sun9-28.userapi.com/c854424/v854424294/1bf2d6/H65Wk4n6aFk.jpg?ava=1",
                isOnline: false,
            },
        },
        {
            _id: "5",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 5,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
        {
            _id: "6",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 6,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
        {
            _id: "7",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 7,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
        {
            _id: "8",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 8,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
        {
            _id: "9",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 9,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
        {
            _id: "10",
            text:
                "We are the champions!!! Our frands and we need to improuve our skills",
            isRead: true,
            created_at: "Wed May 13 2020 12:46:19 ",
            user: {
                _id: 10,
                fullname: "Aleksey Elchin",
                avatar: null,
                isOnline: true,
            },
        },
    ],
    messages: [
        {
            _id: "1123987w098rwkweoiu2309842340234d",
            text: " Our frands and we need to improuve our skills",
            "created-at": "Sun Nov 03 1985 18:49:32",
            user: {
                _id: "qwe343453645e34546456t546",
                fullname: "Aleksey Elchin",
                avatar:
                    "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
            },
            dialog: "1",
        },
        {
            _id: "1123987w098rwkw2eoiu2309842340234d",
            text: " Our frands and we need to improuve our skills",
            "created-at": "Sun Nov 03 1985 18:49:32",
            user: {
                _id: "qwe343453645e34546456t546",
                fullname: "Aleksey Elchin",
                avatar:
                    "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
            },
            dialog: "1",
        },
    ],
};

router.get(
    "/dialogs",

    async (req, res) => {
        //FIXME: CONSOLE LOG ===========>
        console.log(data);
        try {
            //FIXME: CONSOLE LOG ===========>
            console.log(" Body : ", req.body);

            res.status(200).json(data);
        } catch (err) {
            res.status(500).json({
                message: "Что то пошло не так, попробуйте снова",
            });
        }
    }
);

module.exports = router;
