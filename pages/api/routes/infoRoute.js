const express = require("express");
const router = express.Router();

const { getCardInfoData, getMenuItemsData, getSingleMenuItemsData, postCardData, postMenuData } = require("../controllers/infoController");

router.get("/cardInfo", getCardInfoData);
router.get("/menuItems", getMenuItemsData);
router.get("/menuItems/:id", getSingleMenuItemsData);
router.post("/cardInfo", postCardData);
router.post("/menuItems", postMenuData);

module.exports = router;
