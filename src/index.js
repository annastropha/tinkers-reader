var m = require("mithril")

var Layout = require("./views/Layout");
var MaterialList = require("./views/MaterialList");
var MaterialForm = require("./views/MaterialForm");
var MaterialView = require("./views/MaterialView");
var ToolBuilder  = require("./views/tool_builder/ToolBuilder");


m.route(document.body, "/list", {
    "/list": {render: function() {
        return m(Layout, m(MaterialList))
    }},
    "/builder": {render: function() {
        return m(Layout, m(ToolBuilder))
    }},
    "/edit/:id": {render: function(vnode) {
        return m(Layout, m(MaterialForm, vnode.attrs))
    }},
    "/view/:id": {render: function(vnode) {
        return m(Layout, m(MaterialView, vnode.attrs))
    }}
})