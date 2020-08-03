"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
//showing property expansion for passing properties
//children should be react.reactnode and enclosed in a fragment
//to prevent undef / null / boolean passing
var App = function (props) {
    var name = props.name, enthusiasmLevel = props.enthusiasmLevel, children = props.children, otherProps = __rest(props, ["name", "enthusiasmLevel", "children"]);
    return (<react_native_1.View {...otherProps} style={styles.container}>
      <react_native_1.Text>Start the app!</react_native_1.Text>
      <>{children}</>
    </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
exports.default = App;
