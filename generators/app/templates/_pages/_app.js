const debug = require("debug")("app"),
path = require("path"),
App = require("@neofreko/coriander").App;

const DemoApp = new App().createAndroidApp(
`${path.resolve(__dirname)}/../../apk/my-awesome-apk.apk`,
"<%= packageName %>",
"<%= packageName %>.MainActivity"
);

module.exports = DemoApp;
