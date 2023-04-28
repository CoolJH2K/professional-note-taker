// Require express, path, routes, and middleware files
const express = require("express");
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

// ***The path set in your router.*('/yourPathHere') for these files needs to reflect it's positioning relative to the path called in server.js -- Activity 22... router middleware

// The mini-project is a gold mine of what you will need to complete this - server.js, routes/tips.js, and helpers/fsUtils.js as well as Activities 21/22 will be particularly helpful - how can the promisified readFile and writeFile be used? 

// If you are going to work on the Bonus section (I highly recommend this!), research how the array.filter() method can help with this task.  How would you go about making use of an id?