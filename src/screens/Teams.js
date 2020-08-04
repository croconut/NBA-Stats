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
var Styles_1 = require("../globals/Styles");
var dummy = ["big dummy"];
var Teams = function (props) {
    var navigation = props.navigation;
    var coloredStyles = Styles_1.Colored();
    var parentStyle = coloredStyles.stackedScreen;
    var notificationStyle = coloredStyles.notification;
    var textColor = coloredStyles.screenText.color;
    return (<react_native_1.View style={parentStyle}>
      <react_native_1.Text style={__assign(__assign({}, Styles_1.Colorless.largeText), { color: textColor })}>
        Details
      </react_native_1.Text>
      <react_native_1.View style={Styles_1.Colorless.horizontalRow}>
        <react_native_1.Button title="Bottom" color={notificationStyle.backgroundColor} onPress={function () {
        navigation.navigate("Players", dummy);
    }}/>
        <react_native_1.Button title="Top" color={notificationStyle.backgroundColor} onPress={function () {
        navigation.navigate("News", dummy);
    }}/>
      </react_native_1.View>
    </react_native_1.View>);
};
exports.default = Teams;
