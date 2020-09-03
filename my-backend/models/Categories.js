const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema({
    category_name: String,
    picture: String,
});

const CategorieModel = mongoose.model("Categories", categorieSchema);

module.exports = CategorieModel;