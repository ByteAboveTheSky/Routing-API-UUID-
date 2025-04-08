const express = require("express");
const logger = require("morgan");
const PORT = 3001;

const app = express();

const filmRouter = require("./router/filmRouter");
const emojisRouter = require("./router/emojisRouter");
//middlewares:
// Can accept incoming JSON data
app.use(express.urlencoded({ extended: false }));
// Can send outgoing JSON data
app.use(express.json());
// logs requests and metadata
app.use(logger("dev"));

app.use("/api/v1/films", filmRouter);
app.use("/api/v1/emojis", emojisRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`);
})