"use strict";
// credit: https://stackoverflow.com/questions/33628677/react-native-responsive-font-size
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
// unused, but have access to SCREEN_HEIGHT too
var SCREEN_WIDTH = react_native_1.Dimensions.get("window").width;
// arbitrary really, just need something to resize a bit
// most tablet/mobile screens are somewhere between 720 and 280 width
var scale = SCREEN_WIDTH / 320;
var FontScalar = function (size) {
    var newSize = size * scale;
    if (react_native_1.Platform.OS === "ios") {
        return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize));
    }
    else {
        return Math.round(react_native_1.PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
};
exports.default = FontScalar;
