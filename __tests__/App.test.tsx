import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import App from "../App";
import { View, StyleSheet, Platform } from "react-native";

describe("<App />", () => {
  it("renders correctly", () => {
    const tree: ShallowWrapper = shallow(<App />);
    expect(tree).toMatchSnapshot();
  });
});
