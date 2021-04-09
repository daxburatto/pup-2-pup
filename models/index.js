// import all models
const Dog = require('./dog');
const Event = require('./event');
const Park = require('./park');
const User = require('./user');
const Time = require('./time');

// create associations
Dog.belongsTo(User, {
  onDelete: 'SET NULL',
  foreignKey: 'user_id'
});

User.hasMany(Dog, {
  foreignKey: 'user_id'
});

Event.belongsTo(Park, {
  onDelete: 'SET NULL',
  foreignKey: 'park_name'
});

Park.hasMany(Event, {
  foreignKey: 'park_name'
});


Time.belongsTo(User, {
  foreignKey: 'user_id'
});

Time.belongsTo(Park, {
  foreignkey: "parkId"
});

module.exports = { Dog, Event, Park, User, Time };
