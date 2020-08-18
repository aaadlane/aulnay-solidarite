const router = new require("express").Router();
const UserModel = require("../models/User");

router.get("/", async (req, res, next) => {
    try {
        const users = await UserModel.find({});
        console.log("here");
        res.json(users);
    } catch (err) {
        next(err);
    }
});
router.get("/:id", async (req, res, next) => {
    try {
        const getUser = await UserModel.findById(req.params.id);
        res.json(getUser)
    } catch (err) {
        next(err)
    }
});

router.post("/", async (req, res, next) => {
    try {
        const users = await UserModel.create(req.body);
        res.json(users)

    } catch (err) {
        next(err)
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        );
        res.json(updateUser);
    } catch (err) {
        next(err)
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deleteUser = await UserModel.findByIdAndDelete(req.params.id);
        res.json(deleteUser);

    } catch (err) {
        next(err)
    }
});

module.exports = router;