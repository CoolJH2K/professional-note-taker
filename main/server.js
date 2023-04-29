// Require express, path, routes, and middleware files
const express = require("express");
const path = require("path");
const Store = require("./db/store");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Add localhost PORT
const PORT = process.env.PORT || 3001;

const app = express();

// Add middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

// GET Route for homepage
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes page
app.get("/", (req, res) => 
    res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Add PORT listener
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);