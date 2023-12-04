const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

//route for displaying sign-up form
router.get('/signup', (req, res) => {
    res.render('sign-up');
});

//route handling user sign-up

router.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        //create new user in database
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        res.redirect('/login');
    } catch (err) {
        res.status(400).json({err})
    }
    
});
