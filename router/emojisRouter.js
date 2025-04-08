const express = require("express");
const router = express.Router();
// Can generate a unique ID upon server startup


const emojisController = require("../controllers/emojisController");

const emojis =require("../data/emojis");

router.get("/", emojisController.getAllEmojis);

router.post("/", emojisController.postNewEmoji);

router.patch("/:id", emojisController.patchEmoji);

router.delete("/:id", emojisController.deleteEmoji);

module.exports = router;