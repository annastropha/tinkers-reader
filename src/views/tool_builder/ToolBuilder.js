var m = require("mithril");
var Materials = require("../../models/Materials");
var Traits = require("../../models/Traits");
var ToolSelector = require("./ToolSelector");
var PartPicker = require("./PartPicker");
var ToolView = require("./ToolView");
var Tools = require("../../data/Tools");

module.exports = {
    parts: [],
    toolType: Object.keys(Tools)[0],

    oninit: function() {
        if(Materials.list.length == 0) {
            Materials.loadDefaultList();
        }
    },
    view: function() {

        return m("form.toolbuilder", 
            [
                m(ToolSelector, this),
                m(PartPicker, this),
                m(ToolView, this)
            ]
        );
        
    }
}
