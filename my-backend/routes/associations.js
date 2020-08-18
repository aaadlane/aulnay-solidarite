const router = new require("express").Router();
const AssociationModel = require("../models/Associations");

router.get("/", async (req, res, next) => {
    try {
        const association = await AssociationModel.find();
        res.json(association);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const association = await AssociationModel.create(req.body);
        res.json(association)

    } catch (err) {
        next(err)
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const getAssociation = await AssociationModel.findById(req.params.id);
        res.json(getAssociation)
    } catch (err) {
        next(err)
    }
});
router.patch("/:id", async (req, res, next) => {
    try {
        const updateAssoc = await AssociationModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        );
        res.json(updateAssoc);
    } catch (err) {
        next(err)
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const deleteAssoc = await AssociationModel.findByIdAndDelete(req.params.id);
        res.json(deleteAssoc);

    } catch (err) {
        next(err)
    }
});


module.exports = router;