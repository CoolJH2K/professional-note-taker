// Require fs and util
const fs = require("fs");
const util = require("util");

// Create fs.readFromFile promise
const readFromFile = util.promisify(fs.readFile);

// Create writeToFile function
const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => err ? console.log(err) : console.info(`\nData written to ${destination}`))
};

// Create readAndAppend function
const readAndAppend = (content, file) => {
    fs.readFile(file, `utf8`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

// Export modules
module.exports = {readFromFile, writeToFile, readAndAppend};