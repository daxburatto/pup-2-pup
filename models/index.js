<<<<<<< HEAD
// import all models
const Dog = require('./dog');
const Event = require('./event');
const Park = require('./park');
const User = require('./user');
const Time = require('./time');

// create associations
Dog.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Dog, {
  foreignKey: 'user_id'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Event, {
  foreignKey: 'user_id'
});

module.exports = { Dog, Event, Park, User, Time };
=======
const User = require('./User')

module.exports = { User }
>>>>>>> fc8380b90b83a50e348f8bb26231bcf1b594241b
