const router = require('express').Router();
const {User, Friend} = require('../../models');


// /friend  added here
// Route to create/add a friend
router.get('/search/:firstName', async (req, res) => {
  try {
    const friendData = await User.findAll({
      where: {
        first_name: req.params.firstName
      }
    });

    res.status(201).json(friendData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to update a friend by ID
router.put('/:id', async (req, res) => {
  try {
    const [updatedRowsCount, updatedFriend] = await Friend.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age,
        race: req.body.race,
        birth_city: req.body.birth_city,
        home_city: req.body.home_city,
      },
      {
        where: {
          id: req.params.id,
        },
        returning: true, 
      }
    );

    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'Friend not found' });
    }

    res.status(200).json(updatedFriend[0]); 
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
