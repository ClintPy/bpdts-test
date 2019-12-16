const geolib = require("geolib");
const bpdts = require("../utilis/bpdts");

const createError = require("http-errors");

// London Coordinates
const LONDON_COORDINATES = {
  latitude: 51.5074,
  longitude: 0.1278
};

const FIFTY_MILES_IN_METERS = 80467;
let results;
let londonPersons;

class userController {
  /**
   * @params {res}
   * @params {req}
   * @params {next}
   * @descrpt Get all Persons Within London or 50 miles off London
   * @returns {array} Return a List of Persons living in London or 50 miles of London
   */
  static async getEveryPersons(req, res, next) {
    try {
      results = await bpdts.getPersons();
    } catch (err) {
      createError(404);
    }

    const persons = results;

    // Iterate through each person, checking whether they are within 50 miles off London.
    // If they are, we add them to the array

    const offLondon = [];

    for (let i = 0; i < persons.length; i++) {
      const getCoord = {
        lat: persons[i].latitude,
        long: persons[i].longitude
      };
      const distance = geolib.getDistance(LONDON_COORDINATES, getCoord);
      if (distance < FIFTY_MILES_IN_METERS) {
        offLondon.push(persons[i]);
      }
    }

    // Now GET all persons who are living in London

    try {
      londonPersons = await bpdts.getPersons();
    } catch (err) {
      createError(404);
    }

    const EveryPersonInLondon = offLondon.concat(londonPersons);

    return res.status(200).send(EveryPersonInLondon);
  }
}

module.exports = userController.getEveryPersons;
