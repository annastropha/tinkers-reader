var m = require("mithril");
var Materials = require("../../models/Materials");
var Traits = require("../../models/Traits");

var ImportExport = {
    view: function() {

        //This allows the materials list to be saved and loaded as JSON
        return m("div.importexport", [
            m("input#material-upload[type=file]"),
            m("button", {
                'onclick': function(event) {
                    const selectedFile = document.getElementById('material-upload').files[0];
                    if(selectedFile) {
                        if(window.confirm("Warning: This will overwrite the current dataset")) {
                            let oldListM = Materials.list;
                            let oldListT = Traits.list;
                            const reader = new FileReader();
                            reader.addEventListener("loadend", function(event) {
                                const mats = JSON.parse(reader.result);
                                try {
                                    Materials.loadFromJson(mats);
                                    Traits.loadFromJson(mats);
                                    m.redraw()
                                } catch(error) {
                                    Materials.list = oldListM;
                                    Traits.list = oldListT;
                                    window.alert("Error while loading JSON");
                                    console.error(error);    
                                }
                            });
                            reader.readAsText(selectedFile);
                        }

                    } else {
                        window.alert("No file selected");
                    }
                    
                }
            }, "Confirm Upload"),
            m("button", {
                'onclick': function(event) {
                    var text = JSON.stringify({"materials": Materials.list, "traits": Traits.list});
                    var element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                    element.setAttribute('download', "tinker-json.json");
                    element.style.display = 'none';
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                }
            }, "Download JSON")
        ]);
        
    }
};

module.exports = ImportExport;