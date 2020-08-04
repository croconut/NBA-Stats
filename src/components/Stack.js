"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Components = require("./Components");
var Screens = require("../screens/Screens");
// needs manual updates for these but it should hardly ever change 
var SCREENS = ["News", "Players", "Teams"];
var GetComponentName = function (name) {
    var rootComponent;
    switch (name) {
        case SCREENS[0]:
            rootComponent = Screens.News;
            break;
        case SCREENS[1]:
            rootComponent = Screens.Players;
            break;
        default:
            rootComponent = Screens.Teams;
            break;
    }
    return rootComponent;
};
var Stacker = stack_1.createStackNavigator();
var Stack = function (props) {
    var navigation = props.navigation, route = props.route;
    var params = route != undefined ? route.name : "Players";
    var rootComponent = GetComponentName(params);
    return (<Stacker.Navigator initialRouteName={params}>
      <Stacker.Screen name={params} component={rootComponent}/>
      <Stacker.Screen name="Game" component={Components.Game}/>
      <Stacker.Screen name="Player" component={Components.Player}/>
      <Stacker.Screen name="Team" component={Components.Team}/>
    </Stacker.Navigator>);
};
exports.default = Stack;
