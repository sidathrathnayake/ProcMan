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

//Routes
const admin_routes = require('./routes/admin_route');
const accountant_routes = require('./routes/accountant_route');
const sitemanager_routes = require('./routes/sitemanager_route');
const apply_routes = require('./routes/apply_route');
const supplier_routes = require('./routes/supplier_route');
const supply_orders_route = require('./routes/supplier_orders_route');

//Routes middleware
app.use(admin_routes);
app.use(accountant_routes);
app.use(sitemanager_routes);
app.use(apply_routes);
app.use(supplier_routes);
app.use(supply_orders_route);

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

const raised_order_route = require('./routes/raised_order_route');
app.use("/raise-order",raised_order_route);