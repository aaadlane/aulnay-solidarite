const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    avatar: String,
    password: String,
    description: String,
    adress: {
        street: String,
        street_number: Number,
        district: String,
    },
    Profile_type: {
       type : String,
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