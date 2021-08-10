const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const CardInfoSchema = new Schema({
    title: String,
    header: String,
    icon: String,
    category: String
})

const CardInfo = mongoose.model("cardInfo", CardInfoSchema);

module.exports = CardInfo;
