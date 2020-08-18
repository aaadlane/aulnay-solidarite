const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const annonceSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    id_category: {
        type: Schema.Types.ObjectId,
        ref: "Categories",
    },
    title: String,
    description: String,
    picture: String,
    timestamps: {
        createdAt: Date,
        updatedAt: Date
    },
    active : Boolean,

});

const AnnonceModel = mongoose.model("Annonce", annonceSchema);

module.exports = AnnonceModel;