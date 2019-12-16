// fetch list of persons from the bpdts API
const fetch = require("node-fetch");

const allUsers = "https://bpdts-test-app.herokuapp.com/users";
const londonUsers = "https://bpdts-test-app.herokuapp.com/city/London/users";

const Fetch = {
  /**
   * @descrip Returns a list of Persons from the bpdts API
   * @returns {array} list of Persons
   */
  getPersons: async () => {
    return await fetch(allUsers).then(res => res.json());
  },

  /**
   * @descrip Returns a list of Persons Living in London
   * @return {array} list of Persons living in London
   */
  getLondonPersons: async () => {
    return await fetch(londonUsers).then(res => res.json());
  }
};

module.exports = Fetch;
