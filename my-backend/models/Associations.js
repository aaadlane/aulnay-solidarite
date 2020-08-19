const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const associationSchema = new Schema({
    id_user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: String,
    email: String,
    picture: String,
    adress: {
        street: String,
        street_number: Number,
        district: String,
        zip_code: Number,
        city: String,
    },
});

const AssociationModel = mongoose.model("Associations", associationSchema);

module.exports = AssociationModel;