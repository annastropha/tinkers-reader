// src/models/User.js
var m = require("mithril")
var mats = require("../data/Mats")

var Materials = {
    list: [],
    loadDefaultList: function() {
        //clone the array - maintain the dataset through edits
        Materials.list = JSON.parse(JSON.stringify(mats.materials))
    },
    current: {},
    currentId: 0,
    load: function(id) {
        if(Materials.list.length == 0) {
            Materials.loadDefaultList();
        }
        //clone the object - maintain the dataset until saving
        Materials.currentId = id;
        Materials.current = JSON.parse(JSON.stringify(Materials.list[id]));
    },
    save: function() {
        //Store the current item into the list
        Materials.list[Materials.currentId] = Materials.current;
    }
}

module.exports = Materials;