"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var path_1 = require("path");
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../.env') });
var app = (0, express_1.default)();
var mongoURI = process.env.MONGO_URI || '';
mongoose_1.default.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function () {
    console.log('Connected to MongoDB');
}).catch(function (error) {
    console.error('Error connecting to MongoDB:', error);
});
app.get('/', function (req, res) {
    res.send("hi");
});
var PORT = process.env.BACKEND_PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
exports.default = app;
