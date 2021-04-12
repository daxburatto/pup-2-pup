const { Dog } = require('../models');

const dogData = [
  {
    name: 'Shirts',
    gender: 'male',
    breed: 'chihuahua',
    bio: 'fatty',
    age: 3,
    weight: 10,
    energy: 1,
    patience: 3,
    dominance:4,
    image: "google.com",
    user_id: 1
  },
  {
    name: 'Dame',
    gender: 'male',
    breed: 'husky',
    bio: 'angry',
    age: 5,
    weight: 70,
    energy: 3,
    patience: 2,
    dominance:4,
    image: "google.com",
    user_id: 2
  },
  {
    name: 'Raggy',
    gender: 'female',
    breed: 'terrier',
    bio: 'hungry',
    age: 1,
    weight: 100,
    energy: 1,
    patience: 1,
    dominance:1,
    image: "google.com",
    user_id: 3
  },
  {
    name: 'Will',
    gender: 'female',
    breed: 'lab',
    bio: 'sad',
    age: 13,
    weight: 12,
    energy: 3,
    patience: 4,
    dominance:2,
    image: "google.com",
    user_id: 4
  },
  {
    name: 'Quinn',
    gender: 'male',
    breed: 'pitbull',
    bio: 'athletic',
    age: 6,
    weight: 40,
    energy: 5,
    patience: 5,
    dominance:5,
    image: "google.com",
    user_id: 5
  },
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;
