const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messagerieSchema = new Schema({
    id_annonce: {
        type: Schema.Types.ObjectId
    },
    message_content: {type:String,
    default: null},
    writer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reader: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: Date,
});

const MessagerieModel = mongoose.model("Messagerie", messagerieSchema);

module.exports = MessagerieModel;