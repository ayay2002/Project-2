const router = require('express').Router();
const Friend = require('../../models/Friend');

// route to create/add a friend
router.post('/', async (req, res) => {
  try { 
    const friendData = await Friend.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    race: req.body.race,
    birth_city: req.body.birth_city,
    home_city: req.body.home_city,
  });
  res.status(200).json(friendData)
} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', async (req, res) => {

  try {
    const friend = await friend.update(
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
    });
    res.status(200).json(friend);
  } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
