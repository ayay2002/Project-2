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
            first_name: req.boddy.first_name,
            last_name: req.body.last_name,
            age: eq.body.age,
            race: req.body.race,
            birth_city: req.body.birth_city,
            home_city: req.body.home_city,
            email: req.body.email,
            password: hashedPassword,
        });

        // log user in after sign up
       req.session.save(() => {
        req.session.user_id = newUser.id;
        req.session.logged_in = true;

        res.json({ user: newUser, message: "You are now signed up & logged in!"});
       });

    } catch (err) {
        res.status(400).json({ err});
    }
});

module.exports = router;