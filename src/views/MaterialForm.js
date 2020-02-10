var m = require("mithril")
var Materials = require("../models/Materials")
var MaterialViewUtil = require("./MaterialViewUtil")

module.exports = {
    oninit: function(vnode) {
        Materials.load(vnode.attrs.id)
    },
    view: function() {

        return m("form.materialedit", 
            {
                onsubmit: function(e) {
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
            }).concat([
                m(".material-save", [
                    m("button.material-save.button[type=submit]", "Save")
                ])
            ])
        );
        
    }
}