const sequelize = require('../config/connection');
const friend = require('../models/Friend');
const FriendData = require('./friends-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Friend.bulkCreate(FriendData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();