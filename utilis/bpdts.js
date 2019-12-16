// fetch list of persons from the bpdts API
const fetch = require("node-fetch");

class Fetch {
  /**
   * @descrip Returns a list of Persons from the bpdts API
   * @returns {array} list of Persons
   */
  static async getPersons() {
    return fetch("https://bpdts-test-app.herokuapp.com/users")
      .then(res => res.json())
      .catch(err => res.send(err));
  }

  /**
   * @descrip Returns a list of Persons Living in London
   * @return {array} list of Persons living in London
   */
  async getLondonPersons() {
    return fetch("https://bpdts-test-app.herokuapp.com/city/London/users")
      .then(res => res.json())
      .catch(err => res.send(err));
  }
}

module.exports = Fetch;
