var m = require("mithril")
var mats = require("../data/Mats")

var Traits = {
    list: [],
    loadDefaultList: function() {
        Traits.list = mats.traits
    }
}

module.exports = Traits;