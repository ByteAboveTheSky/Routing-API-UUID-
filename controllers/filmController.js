const films = require("../data/films");

const uuid = require("uuid").v4;

function sort(data, sortOrder, sortBy){
    const sortedData = data.slice().sort((a,b) => {
        const aVal = a[sortBy];
        const bVal = b[sortBy];
        if(aVal < bVal) return -1;
        else if(aVal > bVal) return 1;
        return 0;
    });

    if(sortOrder === "desc"){
        sortedData.reverse();
    }
    return sortedData;
}

const getAllFilms = (req,res) => {
    const sortBy = req.query.sortBy;
    const sortOrder = req.query.sortOrder;
    console.log(films)
    const sortedData = sort(films,sortOrder, sortBy)
    console.log(sortedData);

    // 8a. Respond with films
    res.json({ message: "success", payload: sortedData });
};

const postNewFilm = (req, res) => {
    const newFilm = {
        id: uuid(),
        name: req.body.name,
        boxOffice: req.body.boxOffice,
    };
    films.push(newFilm);
    res.json({message: "success", payload: films});
};

const patchFilm = (req, res) => {
    const film = films.find((film) => film.id === req.params.id);

    console.log("ID param:", req.params.id);
    console.log("Available film IDs:", films.map(f => f.id));

    if (film === undefined) {
        res.status(404).json({ message: "failure", payload: "film not found" });
    } else {
        const incomingObj = req.body;
        Object.assign(film, incomingObj);
        res.json({
            message: "success",
            payload: film,
            allData: films
        });
    }
};

const deleteFilm = (req, res) => {
    const film = films.findIndex((film) => film.id === req.params.id);

    console.log("ID param:", req.params.id);
    console.log("Available film IDs:", films.map(f => f.id));

    if(film === -1){
        res.status(404).json({
            message: "failure",
            payload: "film not found",
        });
    }else{
        const deletedFilm = films.splice(film,1)[0];
        res.json({
            message: "success",
            payload: deletedFilm,
            Films: films
        });
    }
};

module.exports = {
    getAllFilms,
    postNewFilm,
    patchFilm,
    deleteFilm
}