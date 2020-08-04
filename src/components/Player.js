"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = require("../globals/Styles");
// Implementation logic: 
// this component can just update from API every couple seconds while looking at
// it, but only once if not actively in a game, then it should
// schedule it's next check for next game's start time (retrieve from player's 
// team API)
var Player = function (props) {
    var playerID = props.playerID;
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.View style={coloredStyles.stackedScreen}>
            <react_native_1.Text></react_native_1.Text>
        </react_native_1.View>);
};
exports.default = Player;
