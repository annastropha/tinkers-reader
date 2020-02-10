var m = require("mithril")

var MaterialList = require("./views/MaterialList")
var MaterialForm = require("./views/MaterialForm")
var MaterialView = require("./views/MaterialView")


m.route(document.body, "/list", {
    "/list": MaterialList,
    "/edit/:id": MaterialForm,
    "/view/:id": MaterialView
})