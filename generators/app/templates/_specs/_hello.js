const path = require("path");
const debug = require("debug")("hello");

const assert = require("assert"),
  chai = require("chai"),
  expect = chai.expect,
  chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

const DemoApp = require("../pages/app");

let client = null; // we will fill this in later

describe("Framework Test", function() {
  this.timeout(1000000);

  // Initialize client variable
  before(async function() {
    client = await DemoApp.driver;
  });

  it("App has driver", async function() {
    expect(DemoApp.driver).to.not.be.undefined;
  });
});
