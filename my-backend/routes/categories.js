const router = new require("express").Router();
const CategorieModel = require("../models/Categories");

router.get("/", async (req, res, next) => {
    try {
        const categories = await CategorieModel.find();
        res.json(categories);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const getCategories = await CategorieModel.findById(req.params.id);
        res.json(getCategories)
    } catch (err) {
        next(err)
    }
});

router.post("/", async (req, res, next) => {
    try {
        const categories = await CategorieModel.create(req.body);
        res.json(categories)

    } catch (err) {
        next(err)
    }
});

router.patch("/:id", async (req, res, next) => {
    try {
        const updateCategory = await CategorieModel.findByIdAndUpdate(
            req.params.id,
            req.body, {
                new: true
            }
        );
        res.json(updateCategory);
    } catch (err) {
        next(err)
    }
});
router.delete("/:id", async (req, res, next) => {
    try {
        const deleteCategorie = await CategorieModel.findByIdAndDelete(req.params.id);
        res.json(deleteCategorie);

    } catch (err) {
        next(err)
    }
});


module.exports = router;