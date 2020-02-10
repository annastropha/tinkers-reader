var m = require("mithril")

var MaterialList = require("./views/MaterialList")
var MaterialForm = require("./views/MaterialForm")

m.route(document.body, "/list", {
    "/list": MaterialList,
    "/edit/:id": MaterialForm
})