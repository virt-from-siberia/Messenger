const { Router } = require("express");
const User = require("../models/User");
const router = Router();

//NOTE/: Path /api/auth/
//NOTE/: Registration
router.post(
    "/test",

    async (req, res) => {
        //FIXME: CONSOLE LOG ===========>
        console.log("test request ");
        try {
            console.log(req.body);
            res.send({});
        } catch (err) {
            res.status(500).json({
                message: "Что то пошло не так, попробуйте снова",
            });
        }
    }
);

module.exports = router;
