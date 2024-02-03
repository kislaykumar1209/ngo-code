const express = require("express");
const corsOption = require("./src/config/cors");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("./images/"));
app.use("/", express.static(path.join(__dirname, "./src/images/")));

app.use(cors(corsOption));

require("./src/api/v1/routes")(app);

module.exports = app;
