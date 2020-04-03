var m = require("mithril");
var ToolBuilder = require("./ToolBuilder");
var PartPicker = require("./PartPicker");
var Tools = require("../../data/Tools");

var ToolSelector = {

    view: function() {

        //This should be a dropdown that lets you pick a tool type
        //It should expose the attribute's 'code' (e.g. pickaxe, labelled Pickaxe)
        return m("div.sorter", [
            m("select[id=sorter][name=sorter]",
                {
                    onchange: function (e) {
                        ToolBuilder.toolType = e.srcElement.value;
                        ToolBuilder.parts = []; //empty it out
                        PartPicker.resetParts(e);
                    },
                },
                [m("option[value=none]", "Select a Tool Type")].concat(Object.keys(Tools).map(key => m("option[value="+key+"]", Tools[key].name))),
            )
        ]);
        
    }
};

module.exports = ToolSelector;