// src/models/User.js
var m = require("mithril")
var mats = require("../data/VanillaMats")

const STORAGE_KEY = "TinkerReaderMaterialList";

var Materials = {
    list: [],
    loadDefaultList: function() {
        let lsList = localStorage.getItem(STORAGE_KEY);
        if(lsList) {
            Materials.list = JSON.parse(lsList);
        } else {
            //clone the array - maintain the dataset through edits
            Materials.list = JSON.parse(JSON.stringify(mats.materials));
            for (let i = 0; i < Materials.list.length; i++) {
                Materials.list[i].id = i;
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Materials.list));
        }
    },
    loadFromJson: function(inputjson) {
        Materials.list = inputjson.materials;
        for (let i = 0; i < Materials.list.length; i++) {
            Materials.list[i].id = i;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Materials.list));
    },
    current: {},
    currentId: 0,
    getUsableNumbers(id){ 
        if(Materials.list.length == 0) {
            Materials.loadDefaultList();
        }
        var data = JSON.parse(JSON.stringify(Materials.list[id]));
        for(var v in data) {
            if(!isNaN(data[v])) {
                data[v] = Number.parseFloat(data[v]);
            }
        }
        return data;
    },
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
        Materials.current.id = Materials.currentId;
        Materials.list[Materials.currentId] = Materials.current;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(Materials.list));
    }
}

module.exports = Materials;