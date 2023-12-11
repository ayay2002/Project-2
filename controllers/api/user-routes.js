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
        console.log(req.body.email, req.body.homeCity)
        //create new user in database
        const newUser = await User.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
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
        res.json({ success: true, message: "You are now signed up & logged in!" });
    });

        } catch (err) {
            console.error('An error occurred during sign-up:', err);
            res.status(500).json({ success: false, message: 'An error occurred during sign-up.' });
            }
    });


//Login route for existing users
router.post('/api/auth/login', async (req, res) => {
    try {
        //find user data by email
        console.log('Login route accessed');
        const userData = await User.findOne({ where: { email: req.body.email}});
        
        //check if user email exists in database
        if (!userData) {
            console.log('User not found:', req.body.email);
            return res.status(400).json({ message: 'Incorrect email or password'});
        }

        //check if password is valid
        console.log('Incorrect password for user:', req.body.email);
        const correctPassword = await bcrypt.compare(req.body.password, userData.password);

        if (!correctPassword) {
            return res.status(400).json({ message: 'Incorrect email or password'});
        }

        //if email & password are correct => save session
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            console.log('User logged in:', req.body.email);
            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;