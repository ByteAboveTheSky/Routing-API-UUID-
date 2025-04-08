const emojis = require("../data/emojis");
const uuid = require("uuid").v4;

function sort (data, sortOrder, sortBy){
    const sortedData = data.slice().sort((a, b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];
        if(aVal < bVal) return -1;
        if(aVal > bVal) return 1;
        return 0
    });
    if(sortOrder === "desc"){
        sortedData.reverse();
    }
    return sortedData;
}

const getAllEmojis = (req,res) => {
    const sortOrder = req.query.sortOrder;
    const sortBy = req.query.sortBy;
    const sortedData = sort(emojis,sortOrder,sortBy)

    // 8a. Respond with emojis
    res.json({ message: "success", payload: sortedData });
};

const postNewEmoji = (req, res) =>{
    const newEmoji = {
        id:uuid(),
        symbol: req.body.symbol,
        name: req.body.name,
        categories: [
            req.body.categories
        ]
    }

    emojis.push(newEmoji)

    res.json({ message: "success", payload: emojis });
};

const patchEmoji = (req,res) =>{
    const emoji = emojis.find((emoji) => emoji.id === req.params.id);

    console.log("ID param:", req.params.id);
    console.log("Available emojis IDs:", emojis.map(f => f.id));

    if(emoji === undefined){
        res.status(404).json({ message: "failure", payload: "emoji not found" });
    }else{
        const incomingObj=req.body;
        Object.assign(emoji, incomingObj);

        res.json({
            message: "success",
            payload: emojis,
        });
    }
};

const deleteEmoji = (req, res) => {
    const emojiIndex = emojis.findIndex((emoji) => emoji.id === req.params.id);

    console.log("ID param:", req.params.id);
    console.log("Available emojis IDs:", emojis.map(f => f.id));

    if(emojiIndex === -1){
        res.status(404).json({ message: "failure", payload: "emoji not found" });
    }else{
        const deletedEmoji = emojis.splice(emojiIndex, 1)[0];

        res.json({
            message: "success",
            payload: "deleted emoji:",deletedEmoji,
            emojis:emojis
        });
    }
}

module.exports = {
    getAllEmojis,
    postNewEmoji,
    patchEmoji,
    deleteEmoji
}