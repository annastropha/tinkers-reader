var m = require("mithril")
var Materials = require("../models/Materials")

module.exports = {
    render: function(numberRow, name) {
        return [
            name(),
            m(".majorsection.tool", [
                m("h2", "Tool Stats"),
                m(".section.head", [
                    m("h3", "Head"),
                    numberRow("Durability", "headdur"),
                    numberRow("Mining Level", "headlevel"),
                    numberRow("Mining Speed", "headspeed"),
                    numberRow("Attack", "headattack")
                ]),
                m(".section.handle", [
                    m("h3", "Handle"),
                    numberRow("Modifier", "handlemod"),
                    numberRow("Durability", "handledur")
                ]),
                m(".section.extra", [
                    m("h3", "Extra"),
                    numberRow("Durability", "extradur")
                ]),
            ]),
            m(".majorsection.archery", [
                m("h2", "Bow Stats"),
                m(".section.bow", [
                    m("h3", "Bow"),
                    numberRow("Draw Speed", "bowspeed"),
                    numberRow("Range Multiplier", "bowrange"),
                    numberRow("Bonus Damage", "bowdamage")
                ]),
                m(".section.bowstring", [
                    m("h3", "Bowstring"),
                    numberRow("Modifier", "stringmod")
                ]),
                m(".section.shaft", [
                    m("h3", "Arrow Shaft"),
                    numberRow("Modifier", "shaftmod"),
                    numberRow("Durability", "shaftbonus")
                ]),
                m(".section.fletching", [
                    m("h3", "Fletching"),
                    numberRow("Modifier", "fletchmod"),
                    numberRow("Accuracy", "fletchacc")
                ]),
            ]),
            m(".majorsection.armor", [
                m("h2", "Armor Stats"),
                m(".section.core", [
                    m("h3", "Armor Core"),
                    numberRow("Durability", "coredur"),
                    numberRow("Defense", "coredef")
                ]),
                m(".section.plates", [
                    m("h3", "Armor Plates"),
                    numberRow("Modifier", "platemod"),
                    numberRow("Durability", "platedur"),
                    numberRow("Toughness", "platetough")
                ]),
                m(".section.trim", [
                    m("h3", "Armor Trim"),
                    numberRow("Durability", "trimdur")
                ]),
            ])
        ];
    }
}