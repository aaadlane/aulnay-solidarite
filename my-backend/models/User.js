const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dpdlhag1u/image/upload/v1589985725/samples/animals/kitten-playing.gif"
    },

    password: String,
    description: String,
    adress: {
        street: String,
        street_number: Number,
        district: String,
    },
    Profile_type: {
        type: String,
        enum: ["association", "user"],
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },

});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;