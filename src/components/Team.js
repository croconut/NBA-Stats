"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = require("../globals/Styles");
// component should be very similar to player: always do an API update on load
// and check for ongoing games
var Team = function (_a) {
    var teamID = _a.teamID;
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.View style={coloredStyles.screen}>
      <react_native_1.Text></react_native_1.Text>
    </react_native_1.View>);
};
exports.default = Team;
