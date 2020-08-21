const router = new require("express").Router();
const AnnonceModel = require("../models/Annonce");

router.get("/", async (req, res, next) => {
  try {
    const annonce = await AnnonceModel.find().populate("id_user").populate("id_category");
    res.json(annonce);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const annonce = await AnnonceModel.create(req.body);
    res.json(annonce)

  } catch (err) {
    next(err)
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const getAnnonce = await AnnonceModel.findById(req.params.id);
    res.json(getAnnonce)
  } catch (err) {
    next(err)
  }
});
router.patch("/:id", async (req, res, next) => {
  try {
    const updateAnnonce = await AnnonceModel.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      }
    );
    res.json(updateAnnonce);
  } catch (err) {
    next(err)
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteAnnonce = await AnnonceModel.findByIdAndDelete(req.params.id);
    res.json(deleteAnnonce);

  } catch (err) {
    next(err)
  }
});


module.exports = router;