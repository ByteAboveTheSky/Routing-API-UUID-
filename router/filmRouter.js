const express = require("express");
const {query} = require("express");
const router = express.Router();

const filmController = require("../controllers/filmController");;

router.get("/", filmController.getAllFilms);

router.post("/", filmController.postNewFilm);

router.patch("/:id", filmController.patchFilm);

router.delete("/:id", filmController.deleteFilm);

module.exports = router;