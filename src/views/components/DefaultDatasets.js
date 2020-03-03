var m = require("mithril");
var Materials = require("../../models/Materials");
var Traits = require("../../models/Traits");
var DevMats = require("../../data/DevMats");
var VanillaMats = require("../../data/VanillaMats");

var ImportExport = {
    view: function() {

        //This allows the materials list to be saved and loaded as JSON
        return m("div.default-datasets", [
            m("button", {
                'onclick': function(event) {
                    if(window.confirm("Warning: This will overwrite the current dataset")) {
                        Materials.loadFromJson(VanillaMats);
                        Traits.loadFromJson(VanillaMats);
                    }
                }
            }, "Load Default Data"),
            m("button", {
                'onclick': function(event) {
                    if(window.confirm("Warning: This will overwrite the current dataset")) {
                        Materials.loadFromJson(DevMats);
                        Traits.loadFromJson(DevMats);
                    }
                }
            }, "Load Developer's Data")
        ]);
        
    }
};

module.exports = ImportExport;