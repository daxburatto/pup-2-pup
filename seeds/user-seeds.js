const { User } = require('../models');

const userData = [
  {
    name: 'Jose Ramirez',
    username: 'jose11',
    email: "user1@email.com",
    password: "1234",
    profileImage: "https://google.com"
  },
  {
    name: 'Reggie Wayne',
    username: 'reggie87',
    email: "user2@email.com",
    password: "1234",
    profileImage: "https://bing.com"
  },
  {
    name: 'Barbara Wilson',
    username: 'barbie22',
    email: "user3@email.com",
    password: "1234",
    profileImage: "https://bing.com"
  },
  {
    name: 'Wendy Foo',
    username: 'wenwen3',
    email: "user4@email.com",
    password: "1234",
    profileImage: "https://bing.com"
  },
  {
    name: 'Randy Doorsen',
    username: 'fatboy',
    email: "user5@email.com",
    password: "1234",
    profileImage: "https://bing.com"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
