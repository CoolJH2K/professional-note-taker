// Require express and path
const app = require("express").Router();
const path = require("path");

// GET route for homepage
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
);

// GET route for notes page
app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
);

// Export app
module.exports = app;