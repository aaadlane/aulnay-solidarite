const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const associationSchema = new Schema({
    id_user: {
        type: Schema.types.ObjectId
    },
    name: String,
    email: String,
    adress: {
        street: String,
        street_number: Number,
        district: String,
        zip_code: Number,
        city: String,
    },
});

const AssociationModel = mongoose.model("User", associationSchema);

module.exports = AssociationModel;