"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var stack_1 = require("@react-navigation/stack");
var Components = require("./Components");
var Screens = require("../screens/Screens");
var native_1 = require("@react-navigation/native");
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
    react_1.default.useEffect(function () {
        var tabChange = navigation.addListener("blur", function (_e) {
            navigation.dispatch(native_1.StackActions.popToTop());
        });
        return tabChange;
    }, [navigation]);
    return (<Stacker.Navigator initialRouteName={params}>
      <Stacker.Screen name={params} component={rootComponent} options={{ headerShown: false }}/>
      <Stacker.Screen name="Game" component={screens.Game}/>
      <Stacker.Screen name="Player" component={screens.Player}/>
      <Stacker.Screen name="Team" component={screens.Team}/>
    </Stacker.Navigator>);
};
exports.default = Stack;
