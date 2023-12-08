const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

//route for displaying sign-up form
router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});

//route handling user sign-up

router.post('/sign-up', async (req, res) => {
    console.log("Received data:", req.body);

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        //create new user in database
        const newUser = await User.create({
            username: req.body.username,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            race: req.body.race,
            birthCity: req.body.birthCity,
            homeCity: req.body.homeCity,
            email: req.body.email,
            password: hashedPassword,
        });

        // log user in after sign up
       req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;
        console.log('success')
        res.json({ user: newUser, message: "You are now signed up & logged in!"});
       });

    } catch (err) {
        res.status(400).json({err:err.message});
        console.log(err.message)
    }
});

//Login route for existing users
router.post('/login', async (req, res) => {
    try {
        //find user data by email
        const userData = await User.findOne({ where: { email: req.body.email}});
        
        //check if user email exists in database
        if (!userData) {
            return res.status(400).json({ message: 'Incorrect email or password'});
        }

        //check if password is valid
        const correctPassword = await bcrypt.compare(req.body.password, userData.password);

        if (!correctPassword) {
            return res.status(400).json({ message: 'Incorrect email or password'});
        }

        //if email & password are correct => save session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;