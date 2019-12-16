const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../../app");

const should = chai.should();

chai.use(chaiHttp);

describe("/GET users", () => {
  it("it should GET all users living in London or 50 miles of London", done => {
    chai
      .request(app)
      .get("/users")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
});
