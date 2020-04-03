var Tools = {
    "pickaxe": {
        name: 'Pickaxe',
        parts: {
            'Head':'pickaxe_head',
            'Tool Rod':'tool_rod',
            'Binding':'binding'
        },
        build: {
            head: ['Head'],
            extra: ['Binding'],
            handle: ['Tool Rod']
        },
        modifier: [
            
        ]
    },
    "hammer": {
        name: 'Hammer',
        parts: {
            'Head':'hammer_head',
            'Large Plate 1':'large_plate',
            'Large Plate 2':'large_plate',
            'Tough Rod':'tough_tool_rod'
        },
        build: {
            head: ['Head','Head','Large Plate 1','Large Plate 2'],
            handle: ['Tough Rod']
        },
        modifier: [
            {
                attribute: 'durability',
                operation: 'multiply',
                number: 2.5
            }
        ]
    },
    "cleaver": {
        name: 'Cleaver',
        parts: {
            'Tough Rod (Handle)':'tough_tool_rod',
            'Large Sword Blade':'large_blade',
            'Large Plate':'large_plate',
            'Tough Rod (Guard)':'tough_tool_rod'
        },
        build: {
            head: ['Large Plate', 'Large Sword Blade'],
            extra: ['Tough Rod (Guard)'],
            handle: ['Tough Rod (Handle)']
        },
        modifier: [
            {
                attribute: 'attack',
                operation: 'multiply',
                number: 1.3
            },
            {
                attribute: 'attack',
                operation: 'add',
                number: 3
            },
            {
                attribute: 'durability',
                operation: 'multiply',
                number: 3
            }
        ],
        trait: ['beheading', 'beheading']
    }
};

module.exports = Tools;
