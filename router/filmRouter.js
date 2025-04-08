const express = require("express");
const {query} = require("express");
const router = express.Router();
// Can generate a unique ID upon server startup
const uuid = require("uuid").v4;
const filmController = require("../controllers/filmController");;

router.get("/", filmController.getAllFilms);

router.post("/", filmController.postNewFilm);

router.patch("/:id", filmController.patchFilm);

router.delete("/:id", filmController.deleteFilm);

module.exports = router;