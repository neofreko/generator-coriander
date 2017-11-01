"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        "Welcome to the lovely " +
          chalk.red("generator-coriander") +
          " generator!"
      )
    );

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
      {
        type: "input",
        name: "packageName",
        message: "Your package name",
        default: `com.awesome.${this.appname}` // Default to current folder name
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      console.log(props);
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("_pages/_app.js"),
      this.destinationPath("pages/app.js"),
      {
        packageName: this.props.packageName,
      }
    );

    this.fs.copyTpl(
      this.templatePath("_specs/_hello.js"),
      this.destinationPath("specs/hello.js")
    );

    this.fs.copy(
      this.templatePath("_apk/_README.md"),
      this.destinationPath("apk/README.md")
    );

    this.fs.copy(
      this.templatePath("_wdio.conf.js"),
      this.destinationPath("wdio.conf.js")
    );

    this.fs.copyTpl(
      this.templatePath("_package.json"),
      this.destinationPath("package.json"),
      {
        name: this.props.name
      }
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
