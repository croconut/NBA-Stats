"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var Styles_1 = require("../globals/Styles");
var native_1 = require("@react-navigation/native");
// Implementation logic:
// component should check if the gameID currently stored in the object store
// has this gameID with the completed tag
// if it is just render with info from the object store, else request a render
// from the web if it has been more than 10 seconds since last request
var Game = function (props) {
    var navigation = props.navigation;
    var route = native_1.useRoute();
    var coloredStyles = Styles_1.Colored();
    return (<react_native_1.View style={coloredStyles.stackedScreen}>
      <react_native_1.Text style={{
        color: coloredStyles.screenText.color,
        fontSize: Styles_1.Colorless.mediumText.fontSize,
    }}>
        Game #{route.params.ID}
      </react_native_1.Text>
      <react_native_1.Button title="Bottom" color={coloredStyles.notification.backgroundColor} onPress={function () {
        navigation.navigate("Player", { ID: 22 });
    }}/>
    </react_native_1.View>);
};
exports.default = Game;
