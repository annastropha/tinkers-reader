var m = require("mithril");
var Materials = require("../models/Materials");
var SortSelector = require("./components/SortSelector");
var ImportExport = require("./components/ImportExport");
var DefaultDatasets = require("./components/DefaultDatasets");
module.exports = {
    oninit: function() {
        if(Materials.list.length == 0) {
            Materials.loadDefaultList();
        }
    },
    renderItem: function(material) {
        return m(m.route.Link, 
            {
                class: "mat-list-item",
                href: "/view/" + material.id
            },
            [
                m(".wrapper", [
                    m("img.item-image", {src: "data:image/png;base64," + material.image}),
                    m(".sorted-data", material[SortSelector.value])
                ]),
                m(".item-name", material.name)
            ]
        );
    },
    view: function() {
        return [
            m(SortSelector),
            m(ImportExport),
            m(DefaultDatasets),
            m(".material-list", this.sorted(Materials.list).map(this.renderItem))
        ];
    },
    sorted: function(list) {
        let outList = list.concat(); //shallow copy of the list
        if(SortSelector.value=='none') {
            return outList;
        }
        outList.sort(function(a,b) {
            return a[SortSelector.value] - b[SortSelector.value];
        });
        //remove 'no data' entries
        outList = outList.filter(mat => !isNaN(mat[SortSelector.value]) && isFinite(mat[SortSelector.value]));
        return outList;
    }
}