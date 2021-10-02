require('dotenv').config({path: "./config.env"});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/error_handler');
const ConnectDB = require('./database/procmandb');

//Database connection
ConnectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json());

//Error Handler(After all middleware routes)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT , () => {
    console.log(`Server is running on ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1));
});

//accessing student.js
const inventory = require("./routes/inventory_route");
const purchase_order = require("./routes/purchase_order_route");


//using express accesing the route

app.use("/inventory",inventory);
app.use("/purchase-order",purchase_order);