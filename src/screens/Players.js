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
var Players = function () {
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.View style={coloredStyles.stackedScreen}>
      <react_native_1.Text style={__assign(__assign({}, Styles_1.Colorless.largeText), coloredStyles.screenText)}>
        Players
      </react_native_1.Text>
    </react_native_1.View>);
};
exports.default = Players;
