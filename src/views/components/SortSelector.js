var m = require("mithril");
var Materials = require("../../models/Materials");
var MaterialViewUtil = require("../MaterialViewUtil");
var MaterialList = require("../MaterialList");

const STORAGE_KEY = "TinkerReaderSortField";

var SortSelector = {
    value: "none",

    view: function() {

        //This should be a dropdown that lets you pick a numbered attribute and sort by it
        //It should also have an inverter
        //It should expose the attribute's 'code' (e.g. headdur, labelled Head Durability)
        return m("div.sorter", [
            m("select[id=sorter][name=sorter]", {
                onchange: function (e) {
                    SortSelector.value = e.srcElement.value;
                    localStorage.setItem(STORAGE_KEY, SortSelector.value);
                },
            }, [
                m("option[value=none]" + ("none"==SortSelector.value ? "[selected]" : ""), "Unsorted"),
                m("option[disabled]", "(Head)"),
                m("option[value=headdur]" + ("headdur"==SortSelector.value ? "[selected]" : ""), "(Head) Durability"),
                m("option[value=headlevel]" + ("headlevel"==SortSelector.value ? "[selected]" : ""), "(Head) Mining Level"),
                m("option[value=headspeed]" + ("headspeed"==SortSelector.value ? "[selected]" : ""), "(Head) Mining Speed"),
                m("option[value=headattack]" + ("headattack"==SortSelector.value ? "[selected]" : ""), "(Head) Attack Power"),

                m("option[disabled]", "(Handle)"),
                m("option[value=handlemod]" + ("handlemod"==SortSelector.value ? "[selected]" : ""), "(Handle) Modifier"),
                m("option[value=handledur]" + ("handledur"==SortSelector.value ? "[selected]" : ""), "(Handle) Durability"),

                m("option[disabled]", "(Extra)"),
                m("option[value=extradur]" + ("extradur"==SortSelector.value ? "[selected]" : ""), "(Extra) Durability"),

                m("option[disabled]", "(Bow)"),
                m("option[value=bowspeed]" + ("bowspeed"==SortSelector.value ? "[selected]" : ""), "(Bow) Drawspeed"),
                m("option[value=bowrange]" + ("bowrange"==SortSelector.value ? "[selected]" : ""), "(Bow) Range"),
                m("option[value=bowdamage]" + ("bowdamage"==SortSelector.value ? "[selected]" : ""), "(Bow) Damage"),

                m("option[disabled]", "String"),
                m("option[value=stringmod]" + ("stringmod"==SortSelector.value ? "[selected]" : ""), "(Bowstring) Modifier"),

                m("option[disabled]", "Shaft"),
                m("option[value=shaftmod]" + ("shaftmod"==SortSelector.value ? "[selected]" : ""), "(Arrow) Shaft Modifier"),
                m("option[value=shaftbonus]" + ("shaftbonus"==SortSelector.value ? "[selected]" : ""), "(Arrow) Shaft Bonus"),

                m("option[disabled]", "(Fletching)"),
                m("option[value=fletchmod]" + ("fletchmod"==SortSelector.value ? "[selected]" : ""), "(Fletching) Modifier"),
                m("option[value=fletchacc]" + ("fletchacc"==SortSelector.value ? "[selected]" : ""), "(Fletching) Accuracy"),

                m("option[disabled]", "(Armor Core)"),
                m("option[value=coredur]" + ("coredur"==SortSelector.value ? "[selected]" : ""), "(Armor Core) Duability"),
                m("option[value=coredef]" + ("coredef"==SortSelector.value ? "[selected]" : ""), "(Armor Core) Defense"),

                m("option[disabled]", "(Armor Plate)s"),
                m("option[value=platemod]" + ("platemod"==SortSelector.value ? "[selected]" : ""), "(Armor Plate) Modifier"),
                m("option[value=platedur]" + ("platedur"==SortSelector.value ? "[selected]" : ""), "(Armor Plate) Durability"),
                m("option[value=platetough]" + ("platetough"==SortSelector.value ? "[selected]" : ""), "(Armor Plate) Toughness"),

                m("option[disabled]", "(Armor Trim)"),
                m("option[value=trimdur]" + ("trimdur"==SortSelector.value ? "[selected]" : ""), "(Armor Trim) Durability")
            ])
        ]);
        
    }
};

//This must be done before the module is initialized, lest other modules see the unchanged value
let saved_order = localStorage.getItem(STORAGE_KEY);
if(saved_order) {
    SortSelector.value = saved_order;
}

module.exports = SortSelector;