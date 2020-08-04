"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = require("./src/globals/Styles");
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var stack_1 = require("@react-navigation/stack");
var Stack = stack_1.createStackNavigator();
var TopTabs = material_top_tabs_1.createMaterialTopTabNavigator();
var App = function (props) {
    var coloredStyles = Styles_1.Colored();
    var textColor = coloredStyles.screenText;
    return (<react_native_1.View style={coloredStyles.screen}>
      <react_native_1.Text style={__assign(__assign({}, Styles_1.Colorless.largeText), textColor)}>Welcome</react_native_1.Text>
    </react_native_1.View>);
};
exports.default = App;
