const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema({
    category_name: String,
    picture: String,
    adress: {
        street: String,
        street_number: Number,
        district: String,
        zip_code: Number,
        city: String,
    },
});

const CategorieModel = mongoose.model("User", categorieSchema);

module.exports = CategorieModel;