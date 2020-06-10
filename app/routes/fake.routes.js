//NOTE/: FAKE

const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/auth.middleware");

const dialogs = [
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
        text: "We are the champions!!! 😀 😀 😀 Our ",
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
            "We are the champions!!! Our 😀 😀 😀 😀 😀 frands and we need to improuve our skills",
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
];
const messages = [
    {
        _id: "8",
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
        _id: "7",
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
];
const message = [
    {
        _id: "1",
        text: " Our frands and we need to improuve our skills",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "2",
        text: " Our frands and we need to improuve our skills",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "3",
        text: " Our frands and we need to improuve our skills",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "4",
        text: " Our frands and we need to improuve our skills",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "5",
        text: " Our frands and we need to improuve our skills",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "6",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "6",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "6",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "6",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, 😀 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 😀 exercitation ullamco laboris",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "6",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit,😀  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  😀 quis nostrud exercitation ullamco laboris",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
    {
        _id: "6",
        text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  😀 😀veniam, quis nostrud exercitation ullamco laboris",
        "created-at": "Sun Nov 03 1985 18:49:32",
        user: {
            _id: "qwe343453645e34546456t546",
            fullname: "Aleksey Elchin",
            avatar:
                "https://sun9-47.userapi.com/c205816/v205816821/a3252/p8sFQ3f3peE.jpg?ava=1",
        },
        dialog: 1,
    },
];

router.get(
    "/dialogs",

    async (req, res) => {
        try {
            res.status(200).json(dialogs);
        } catch (err) {
            res.status(500).json({
                message: "Что то пошло не так, попробуйте снова",
            });
        }
    }
);

router.get(
    "/messages",

    async (req, res) => {
        // console.log(req.query.dialog);

        try {
            res.status(200).json(message);
        } catch (err) {
            res.status(500).json({
                message: "Что то пошло не так, попробуйте снова",
            });
        }
    }
);

module.exports = router;
