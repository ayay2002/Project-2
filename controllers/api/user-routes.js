const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

//route for displaying sign-up form
router.get('/signup', (req, res) => {
    res.render('sign-up');
});