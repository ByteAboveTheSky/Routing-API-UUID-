const uuid = require("uuid").v4;

const emojis = [
    {
        id: uuid(),
        symbol: '👽',
        letter: 'a',
        name: 'alien',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol:'👶',
        letter: 'b',
        name: 'baby',
        categories: [
            'face',
        ],
    },
    {
        id: uuid(),
        symbol: '📞',
        name: 'call',
        categories: [
            'device',
        ],
    },
]

module.exports=emojis;