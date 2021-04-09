const { Dog } = require('../models');

const dogData = [
  {
    name: 'Shirts',
    gender: 'male',
    breed: 'chihuahua',
    bio: 'fatty',
    weight: 10,
    energy: 1,
    patience: 3,
    dominance:4,
    image: "google.com"
  },
  {
    name: 'Dame',
    gender: 'male',
    breed: 'husky',
    bio: 'angry',
    weight: 70,
    energy: 3,
    patience: 2,
    dominance:4,
    image: "google.com"
  },
  {
    name: 'Raggy',
    gender: 'female',
    breed: 'terrier',
    bio: 'hungry',
    weight: 100,
    energy: 1,
    patience: 1,
    dominance:1,
    image: "google.com"
  },
  {
    name: 'Will',
    gender: 'female',
    breed: 'lab',
    bio: 'sad',
    weight: 12,
    energy: 3,
    patience: 4,
    dominance:2,
    image: "google.com"
  },
  {
    name: 'Quinn',
    gender: 'male',
    breed: 'pitbull',
    bio: 'athletic',
    weight: 40,
    energy: 5,
    patience: 5,
    dominance:5,
    image: "google.com"
  },
];

const seedDogs = () => Dog.bulkCreate(dogData);

module.exports = seedDogs;
