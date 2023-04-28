// Require express, path , and the fsUtils modules
const app = require("express").Router();
const path = require("path");
const {readFromFile, writeToFile, readAndAppend} = require("../helpers/fsUtils");

router.get("/notes", (req, res) => {
    console.info(`Request notes`);
    readFromFile("./db/db.json").then((data) => {
        console.log(data);
        res.send(data);
    });
});

router.post("/notes", (req, res) => {
    console.info(`POSTED`);
    const {title, text} = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            api_id: uuid(),
        };
        console.log(req.body);
        readAndAppend(newNote, "./db/db.json");
        res.json(`Note posted!`);
    } else {
        res.error("An error occured. Please try again.");
    }
});

module.exports = app;