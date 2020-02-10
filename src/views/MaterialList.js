var m = require("mithril")
var Materials = require("../models/Materials")

module.exports = {
    oninit: function() {
        if(Materials.list.length == 0) {
            Materials.loadDefaultList();
        }
    },
    view: function() {
        return m(".material-list", Materials.list.map(function(mat, index) {
            return m(m.route.Link, 
                {
                    class: "mat-list-item",
                    href: "/edit/" + index
                },
                [
                    m("img.item-image", {src: "data:image/png;base64," + mat.image}),
                    m(".item-name", mat.name)
                ]
            );
        }));
    }
}