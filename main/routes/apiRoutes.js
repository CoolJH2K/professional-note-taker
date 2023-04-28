const app = require("express").Router();
const path = require("path");
const {readFromFile, writeToFile, readAndAppend} = require("../helpers/fsUtils");

module.exports = app;