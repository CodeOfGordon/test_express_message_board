const express = require('express');
const appRouter = express.Router();
const { messages } = require('../data/data.js');


appRouter.get('/', (req, res)=> {
    res.render('index', { messages });
});




module.exports = appRouter;