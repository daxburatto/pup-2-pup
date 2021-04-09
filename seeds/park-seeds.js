const { Park } = require('../models');

const parkData = [

{
    name: "Barkin' Springs",
    lat: 30.26374,
    long: -97.7713734
},
{
    name: "Bob Wentz",
    lat: 30.4142043,
    long: -97.8996716
},
{
    name: "Shoal Creek Greenbelt",
    lat: 30.2917254,
    long: -97.7520498
},
{
    name: "Zilker Park",
    lat: 30.2660749,
    long: -97.7713235
},
{
    name: "Auditorium Shores",
    lat: 30.2636342,
    long: -97.756573
}
];

const seedParks = () => Park.bulkCreate(parkData);

module.exports = seedParks;