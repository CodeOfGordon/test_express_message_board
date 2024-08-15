// packages
const express = require('express');
const path = require('node:path');

// routes
const appRouter = require('./routes/appRouter.js');
const msgRouter = require('./routes/msgRouter.js');

// settings
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

// template rendering
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.use('/', appRouter);
app.use('/new', msgRouter);

app.listen  (PORT, ()=> {
    console.log('server running on: ' + PORT);
})