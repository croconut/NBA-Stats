"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = require("../globals/Styles");
var native_1 = require("@react-navigation/native");
// Implementation logic:
// this component can just update from API every couple seconds while looking at
// it, but only once if not actively in a game, then it should
// schedule it's next check for next game's start time (retrieve from player's
// team API)
var Player = function (props) {
    var navigation = props.navigation;
    var route = native_1.useRoute();
    console.log(route.params.ID);
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.View style={coloredStyles.stackedScreen}>
      <react_native_1.Text style={{
        color: coloredStyles.screenText.color,
        fontSize: Styles_1.Colorless.mediumText.fontSize,
    }}>Player #{route.params.ID}</react_native_1.Text>
      <react_native_1.Button title="Bottom" color={coloredStyles.notification.backgroundColor} onPress={function () {
        navigation.navigate("Game", { ID: 22 });
    }}/>
    </react_native_1.View>);
};
exports.default = Player;
