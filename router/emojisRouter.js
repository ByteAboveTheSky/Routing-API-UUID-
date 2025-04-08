const express = require("express");
const router = express.Router();

const emojisController = require("../controllers/emojisController");

router.get("/", emojisController.getAllEmojis);

router.post("/", emojisController.postNewEmoji);

router.patch("/:id", emojisController.patchEmoji);

router.delete("/:id", emojisController.deleteEmoji);

module.exports = router;