var m = require("mithril")

var Layout = require("./views/Layout");
var MaterialList = require("./views/MaterialList");
var MaterialForm = require("./views/MaterialForm");
var MaterialView = require("./views/MaterialView");


m.route(document.body, "/list", {
    "/list": {render: function() {
        return m(Layout, m(MaterialList))
    }},
    "/edit/:id": {render: function(vnode) {
        return m(Layout, m(MaterialForm, vnode.attrs))
    }},
    "/view/:id": {render: function(vnode) {
        return m(Layout, m(MaterialView, vnode.attrs))
    }}
})