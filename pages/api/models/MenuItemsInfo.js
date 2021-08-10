const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const MenuItemsInfoSchema = new Schema({
    text: String,
    icon: String,
    path: String
})

const MenuItemsInfo = mongoose.model("menuItemsInfo", MenuItemsInfoSchema);

module.exports = MenuItemsInfo;
