const CardDataInfo = require("../models/CardInfo");
const MenuItemsDataInfo = require("../models/MenuItemsInfo");

const getCardInfoData = (req, res) => {
    CardDataInfo.find()
        .then(data => {
            res.json({
                data
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

const getMenuItemsData = (req, res) => {
    MenuItemsDataInfo.find()
        .then(data => {
            res.json({
                data
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

const getSingleMenuItemsData = (req, res) => {
    MenuItemsDataInfo.findById(req.params.id)
        .then(data => {
            res.json({
                data
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

const postCardData = (req, res) => {
    let cardData = new CardDataInfo({
        title: req.body.title,
        header: req.body.header,
        icon: req.body.icon,
        category: req.body.category
    })

    cardData.save()
        .then(data => {
            res.json({
                message: "Card Data Created Successfully .....",
                data
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

const postMenuData = (req, res) => {
    let menuData = new MenuItemsDataInfo({
        text: req.body.text,
        icon: req.body.icon,
        path: req.body.path
    })

    menuData.save()
        .then(data => {
            res.json({
                message: "Menu Data Created Successfully .....",
                data
            })
        })
        .catch(err => {
            res.json({
                message: "Error Occured .....",
                error: err
            })
        })
}

module.exports = {
    getCardInfoData,
    getMenuItemsData,
	getSingleMenuItemsData,
	postCardData,
	postMenuData
}
