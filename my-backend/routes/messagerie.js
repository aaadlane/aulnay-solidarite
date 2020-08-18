const router = new require("express").Router();
const MessagerieModel = require("../models/Messagerie");

router.get("/", async (req, res, next) => {
    try {
      const messagerie = await MessagerieModel.find();
      res.json(messagerie);
    } catch (err) {
      next(err);
    }
  });

  router.post("/", async (req, res, next) => {
    try {
        const messagerie = await MessagerieModel.create(req.body); 
        res.json(messagerie)

    } catch (err) {
        next(err)
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const getMessage = await MessagerieModel.findById(req.params.id);
        res.json(getMessage)
    } catch (err) {
        next(err)
    }
});
router.patch("/:id", async (req, res, next) => {
    try {
        const updateMessage = await MessagerieModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        );
        res.json(updateMessage);
    } catch (err) {
        next(err)
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deleteMessage = await MessagerieModel.findByIdAndDelete(req.params.id);
        res.json(deleteMessage);

    } catch (err) {
        next(err)
    }
});

module.exports = router;