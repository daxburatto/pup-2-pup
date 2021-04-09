const { Event } = require('../models');

const eventData = [
  {
    name: "Javier Day",
    date: "2020-03-20 16:12:03",
    time: "10:00am"
  },
  {
    name: "Rex Day",
    date: "2020-05-20 16:12:03",
    time: "11:00am"
  },
  {
    name: "Ben Day",
    date: "2020-07-20 16:12:03",
    time: "11:30am"
  },
  {
    name: "Tom Day",
    date: "2020-09-20 16:12:03",
    time: "9:00am"
  },
];

const seedEvents = () => Event.bulkCreate(eventData);

module.exports = seedEvents;
