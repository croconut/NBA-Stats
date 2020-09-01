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
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var Styles_1 = require("../globals/Styles");
var Home = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    // testing array, will remove
    var items = [];
    for (var i = 0; i < 55; i++) {
        items[i] = i.toString();
    }
    var ref = react_1.default.useRef(null);
    native_1.useScrollToTop(ref);
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.FlatList style={{ backgroundColor: coloredStyles.stackedScreen.backgroundColor }} ListHeaderComponent={function () { return (<react_native_1.Text style={__assign(__assign({}, Styles_1.Colorless.largeText), coloredStyles.screenText)}>
          NEWS
        </react_native_1.Text>); }} ref={ref} data={items} renderItem={function (item) {
        return (<react_native_1.Text style={__assign(__assign({}, Styles_1.Colorless.largeText), coloredStyles.screenText)}>
            {item.item}
          </react_native_1.Text>);
    }} keyExtractor={function (item) { return item; }}/>);
};
exports.default = Home;
