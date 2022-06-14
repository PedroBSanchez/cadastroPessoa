const dotenv = require("dotenv");

const connectToDataBase = require("./src/database/connect.js");

dotenv.config();
connectToDataBase();

require("./modules/express");
