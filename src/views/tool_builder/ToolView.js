var m = require("mithril");
var Materials = require("../../models/Materials");
var Traits = require("../../models/Traits");
var Tool = require("./Tool");
var ToolsData = require("../../data/Tools");
var ToolBuilder = require("./ToolBuilder");

ToolView = {
    view: function() {

        //rebuild the tool
        var toolType = ToolBuilder.toolType;
        if(toolType == "none" || toolType == undefined) {
            //Nothing for now
            return this.fail();
        }
        toolType = ToolsData[toolType];

        var parts = JSON.parse(JSON.stringify(toolType.parts));
        var build = JSON.parse(JSON.stringify(toolType.build));
        var modifiers = JSON.parse(JSON.stringify(toolType.modifier));

        //Ensure all parts are picked
        for(part in parts) {
            if(ToolBuilder.parts[part] == undefined)
             {
                 return ToolView.fail();
             }
        }
        
        //get real materials
        for(partName in parts) {
            parts[partName] = Materials.getUsableNumbers(ToolBuilder.parts[partName]);
        }

        var tool = new Tool();
        if(build.head) {
            tool.head(build.head.map(that => parts[that]));
        }
        if(build.limb) {
            tool.limb(build.limb.map(that => parts[that]));
        }
        if(build.extra) {
            tool.extra(build.extra.map(that => parts[that]));
        }
        if(build.fletch) {
            tool.fletchings(build.fletch.map(that => parts[that]));
        }
        if(build.handle) {
            tool.handle(build.handle.map(that => parts[that]));
        }
        if(build.shaft) {
            tool.shafts(build.shaft.map(that => parts[that]));
        }
        if(build.string) {
            tool.bowstring(build.string.map(that => parts[that]));
        }

        for(var mod of modifiers) {
            if(mod.operation == 'multiply') {
                tool[mod.attribute] *= mod.number;
            } else if(mod.operation == 'add') {
                tool[mod.attribute] *= mod.number;
            } else {
                return ToolView.fail();
            }
        }

        debugger;


        return m("tool-view", 
            [
                "YES"
            ]
        );
    },
    fail: function() {
        return m("tool-view");
    }
}

module.exports = ToolView;
