"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = require("../globals/Styles");
// Implementation logic: 
// component should check if the gameID currently stored in the object store 
// has this gameID with the completed tag
// if it is just render with info from the object store, else request a render 
// from the web if it has been more than 10 seconds since last request
var Game = function (props) {
    var gameID = props.gameID;
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.View style={coloredStyles.screen}>
            <react_native_1.Text></react_native_1.Text>
        </react_native_1.View>);
};
exports.default = Game;
