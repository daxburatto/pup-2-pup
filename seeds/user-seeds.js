const { User } = require('../models');

const userData = [
  {
    name: 'Jose Ramirez',
    username: 'jose11',
    email: "user1@email.com",
    password: "12324444",
    profileImage: "https://google.com"
  },
  {
    name: 'Reggie Wayne',
    username: 'reggie87',
    email: "user2@email.com",
    password: "12534444",
    profileImage: "https://bing.com"
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;