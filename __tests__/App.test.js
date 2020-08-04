"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var react_1 = require("react");
var App_1 = require("../App");
// notable problem: if theres an error popping up on these tsx files
// there may be no actual error when tests are run => e.g. App component
// requires a name property to be passed in tsx but isn't passed in the 
// shallow create below BUT the tests pass anyways :x
// partial solution, require in build for some kind of linting process to
// check for ts/tsx only errors when parsing all tsx/ts files.
describe("<App />", function () {
    it("renders correctly", function () {
        var tree = enzyme_1.shallow(<App_1.default />);
        expect(tree).toMatchSnapshot();
    });
});
