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
var Stack = function (_a) {
    var navigation = _a.navigation, route = _a.route;
    var params = route.name;
    var rootComponent = screens[params];
    // below function causes errors in debug mode, but was my intended effect
    // now realizing that people probably want to keep their history anyways
    // when they switch tab, so i am removing this functionality
    // React.useEffect(() => {
    //   const tabChange = navigation.addListener("blur", (_e) => {
    //     navigation.dispatch(StackActions.popToTop());
    //   });
    //   return tabChange;
    // }, [navigation]);
    return (<Stacker.Navigator initialRouteName={params}>
      <Stacker.Screen name={params} component={rootComponent} options={{ headerShown: false }}/>
      <Stacker.Screen name="Game" component={screens.Game}/>
      <Stacker.Screen name="Player" component={screens.Player}/>
      <Stacker.Screen name="Team" component={screens.Team}/>
    </Stacker.Navigator>);
};
exports.default = Stack;
