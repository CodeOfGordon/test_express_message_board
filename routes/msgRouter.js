const express = require('express');
const msgRouter = express.Router();
const { messages, profile_pictures } = require('../data/data.js');



msgRouter.get('/', (req, res)=> {
    res.render('form');
});

msgRouter.post('/', (req, res)=> {
    const name = req.body.user;
    const text = req.body.text;
    const published = new Date();
    const pfp = profile_pictures[Math.floor(Math.random() * profile_pictures.length)];
    messages.push({ text: text, user: name, added: published, profile: pfp });
    res.redirect('/');
})




module.exports = msgRouter;