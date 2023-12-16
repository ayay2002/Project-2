const req = require('express/lib/request');

const router = require('express').Router();
const {User} = require('../models');
const { LogarithmicScale } = require('chart.js');
// const Friend = require('../models/Friend');

// route to get all friends
// router.get('/', async (req, res) => {
//     const friendData = await Friend.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const friends = friendData.map((friend) => friend.get({ plain: true }));
//         res.render('all', { friends });
//       });
  
//   // route to get one friend
//   router.get('/friend/:id', async (req, res) => {
//     try{ 
//         const friendData = await friend.findByPk(req.params.id);
//         if(!friendData) {
//             res.status(404).json({message: 'No friend with this id!'});
//             return;
//         }
//         const friend = friendData.get({ plain: true });
//         res.render('friend', friend);
//       } catch (err) {
//           res.status(500).json(err);
//       };     
//   });

router.get('/', async (req, res) => {
  res.render("homepage")
});

router.get('/chart', async (req, res) => {
  res.render("chart")
});
router.get('/friends', async (req, res) => {
  res.render("friends")
});

  router.get('/sign-up', async (req, res) => {
    res.render("sign-up")
  });

router.get('/login', async (req, res) => {
  res.render("login")
});

router.get('/profile', async (req, res) => {
  try{
    const userData = await User.findByPk(req.session.user_id)
    console.log('USER DATA');
    console.log(userData)
    const user = userData.get({plain:true})
    console.log('USER');
    console.log(user)
    res.render("profile", {user})
  }
  catch(err){
    res.status(500).json(err)

  }
  
});
module.exports = router;
