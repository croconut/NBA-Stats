import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import App from "../App";
import { View, StyleSheet, Platform } from "react-native";

// notable problem: if theres an error popping up on these tsx files
// there may be no actual error when tests are run => e.g. App component
// requires a name property to be passed in tsx but isn't passed in the 
// shallow create below BUT the tests pass anyways :x

// partial solution, require in build for some kind of linting process to
// check for ts/tsx only errors when parsing all tsx/ts files.

describe("<App />", () => {
  it("renders correctly", () => {
    const tree: ShallowWrapper = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
