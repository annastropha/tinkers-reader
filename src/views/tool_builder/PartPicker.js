var m = require("mithril");
var Tools = require("../../data/Tools");
var Materials = require("../../models/Materials");
var ToolSelector = require("./ToolSelector");
var ToolBuilder = require("./ToolBuilder");

var PartPicker = {
    view: function () {
        return m("div.part-picker", [
            this.getPartForms()
        ]);
    },
    resetParts: function (e) {
        var selects = document.getElementsByClassName('tool-builder-material-picker');
        var i;
        for(i = 0; i < selects.length; i++) {
            let sel = selects[i];
            sel.value = "";
        }
    },
    getPartForms: function () {
        var toolType = ToolBuilder.toolType;
        if (toolType == "none" || toolType == undefined) {
            return m("div", "Pick a Tool Type");
        }

        toolType = Tools[toolType];
        parts = toolType.parts;
        build = toolType.build;

        return Object.keys(parts).map(part => this.getPartForm(part, parts[part], toolType));
    },
    getPartForm: function (partname, parttype, toolType) {
        //TODO: only show valid materials
        return m(".picker", [
            m("h5.partname", partname),
            m("select[id=" + partname + "][class=tool-builder-material-picker][name=" + partname + "]",
                {
                    onchange: function (e) {
                        ToolBuilder.parts[this.id] = this.value;
                    },
                    onupdate: function (e) {
                        ToolBuilder.parts[this.id] = this.value;
                    }
                },
                [m("option[value=]", "Material")].concat(Materials.list.map(function (mat) {
                    return m("option[value=" + mat.id + "]", mat.name);
                }))
            )
        ]);
    }
};

module.exports = PartPicker;
