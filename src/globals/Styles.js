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
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
// import { DefaultTheme, DarkTheme } from "@react-navigation/native";
var expo_constants_1 = require("expo-constants");
var FontScalar_1 = require("../responsive/FontScalar");
var Colors_1 = require("./Colors");
//dynamically changes, need to call the function and store the result
function default_1() {
    var theme = native_1.useTheme().dark ? Colors_1.Dark : Colors_1.Light;
    return react_native_1.StyleSheet.create({
        screen: {
            height: "100%",
            marginTop: expo_constants_1.default.statusBarHeight,
            backgroundColor: theme.colors.backgroundSecondary,
            color: theme.colors.textSecondary,
            borderColor: theme.colors.border,
            alignItems: "center",
        },
        notification: {
            backgroundColor: theme.colors.notification,
            color: theme.colors.textSecondary,
        },
        // the unstacked screens are special
        // this function also can't be called with normal () => style
        // using get allows to call it like obj.unstackedScreen instead :)
        get stackedScreen() {
            return __assign(__assign({}, this.screen), { marginTop: 0 });
        },
        largeText: {
            fontSize: FontScalar_1.default(30),
        },
        mediumText: {
            fontSize: FontScalar_1.default(22),
        },
        smallText: {
            fontSize: FontScalar_1.default(18),
        },
        horizontalRow: {
            paddingTop: "15%",
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-around",
        },
    });
}
exports.default = default_1;
;
