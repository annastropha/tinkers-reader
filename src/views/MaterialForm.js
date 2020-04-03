var m = require("mithril")
var Materials = require("../models/Materials")
var Traits = require("../models/Traits")
var MaterialViewUtil = require("./MaterialViewUtil")

module.exports = {
    oninit: function(vnode) {
        Materials.load(vnode.attrs.id)
    },
    view: function() {

        return m("form.materialedit", 
            {
                onsubmit: function(e) {
                    debugger;
                    e.preventDefault();
                    Materials.save();
                }
            },
            MaterialViewUtil.render(function(name, field) {
                return m(".row-wrapper", [
                    m("label.label", name),
                    m("input.input[type=number][step="+String(field=="headlevel" ? 1 : 0.01)+"]", {
                        oninput: function (e) {Materials.current[field] = e.target.value},
                        value: Materials.current[field]
                    })
                ])
            },function(name, field) {
                return m(".section.name", [
                    m(".row-wrapper", [
                        m("label.label", "Material Name"),
                        m("input.input[type=text][placeholder=Name]", {
                            oninput: function (e) {Materials.current.name = e.target.value},
                            value: Materials.current.name
                        })
                    ])
                ]);
            },
            function(traitfield) {
                return m(".traits", Materials.current[traitfield].filter(t => t.length!=0).map(function(t) {
                    return m(".trait", [
                        m(".trait-name", Traits.get(t).display),
                        Traits.formattedDescription(t)
                    ]);
                }));
            }).concat([
                m(".material-save", [
                    m("a.material-save.button[href=]", { onclick: function(e) {
                        e.preventDefault();
                        Materials.save();
                    }},"Save and Continue Editing"),
                    m(m.route.Link, {
                        class: "material-save button",
                        href: "/list/",
                        onclick: function(e) {
                            e.preventDefault();
                            Materials.save();
                        }
                    }, "Save and Return to List")
                ]),
                
            ])
        );
        
    }
}