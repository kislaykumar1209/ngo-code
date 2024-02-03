const db = require("./src/api/v1/models");
const app = require("./app");
const path = require("path");
// const paths = require('./src/images');

require("dotenv").config();

// const moment = require("moment")
// // console.log(moment.valueOf())
// console.log(new Date().getTime())

const PORT = 8080;

startServer();

function startServer() {
  db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Server ${process.pid} started on port ${PORT}`);
    });
  });
}
