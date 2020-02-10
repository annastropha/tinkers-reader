var m = require("mithril")
var Materials = require("../models/Materials")
var MaterialViewUtil = require("./MaterialViewUtil")

module.exports = {
    oninit: function(vnode) {
        Materials.load(vnode.attrs.id)
    },
    view: function() {
        return m(".materialview",
            MaterialViewUtil.render(function(name, field) {
                return m(".row-wrapper", [
                    m("label.label", name + ": "),
                    m("span.value", !isNaN(parseFloat(Materials.current[field])) && isFinite(Materials.current[field]) ? Number(Materials.current[field]) : "-")
                ])
            },function(name, field) {
                return m(".section.name", [
                    m(".row-wrapper", [
                        m("h1.materialname", Materials.current.name)
                    ])
                ]);
            }).concat([
                m(".edit-container", [
                    m(m.route.Link, 
                    {
                        class: "edit-link",
                        href: "/edit/" + Materials.currentId
                    }, m("button", "Edit Material"))
                ])
            ])
        );
    }
}