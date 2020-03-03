var m = require("mithril")
var mats = require("../data/VanillaMats")

const STORAGE_KEY = "TinkerReaderTraitList";

var Traits = {
    list: [],
    loadDefaultList: function() {
        let lsList = localStorage.getItem(STORAGE_KEY);
        if(lsList) {
            Traits.list = JSON.parse(lsList);
        } else {
            //load from vanilla mats
            Traits.list = JSON.parse(JSON.stringify(mats.traits));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Traits.list));
        }
    },
    loadFromJson: function(json) {
        Traits.list = json.traits;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Traits.list));
    },
    get: function(id) {
        if(this.list.length == 0) {
            this.loadDefaultList();
        }
        return this.list[id];
    },
    formattedDescription: function(id) {
        let desc = this.get(id).desc.replace("§o", "");
        let descParts = desc.split("§r");
        if(descParts.length == 2) {
            return m(".trait-desc", [
                m("em", descParts[0]),
                m("div", descParts[1])
            ]);
        } else {
            return m("div", desc);
        }
    }
}

module.exports = Traits;