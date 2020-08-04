"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Components = require("./Components");
var Screens = require("../screens/Screens");
// needs manual updates for these but it should hardly ever change
var screens = {
    News: Screens.News,
    Teams: Screens.Teams,
    Players: Screens.Players,
    Player: Components.Player,
    Game: Components.Game,
    Team: Components.Team,
};
var Stacker = stack_1.createStackNavigator();
var Stack = function (props) {
    var navigation = props.navigation, route = props.route;
    var params = route.name;
    var rootComponent = screens[params];
    return (<Stacker.Navigator initialRouteName={params}>
      <Stacker.Screen name={params} component={rootComponent} options={{ headerShown: false }}/>
      <Stacker.Screen name="Game" component={Components.Game}/>
      <Stacker.Screen name="Player" component={Components.Player}/>
      <Stacker.Screen name="Team" component={Components.Team}/>
    </Stacker.Navigator>);
};
exports.default = Stack;
