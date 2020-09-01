import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList, ScreenProps } from "../globals/Types";
import * as Components from "./Components";
import * as Screens from "../screens/Screens";


// needs manual updates for these but it should hardly ever change
let screens = {
  News: Screens.News,
  Teams: Screens.Teams,
  Players: Screens.Players,
  Player: Components.Player,
  Game: Components.Game,
  Team: Components.Team,
};

const Stacker = createStackNavigator<StackParamList>();

const Stack: React.FC<ScreenProps> = ({ navigation, route }) => {
  const params = route.name;
  const rootComponent: React.FC<any> = screens[params];
  // below function causes errors in debug mode, but was my intended effect
  // now realizing that people probably want to keep their history anyways
  // when they switch tab, so i am removing this functionality
  // keeping this function in case i change my mind though.
  // could easily check if im already at top of stack tho -> am i at
  // root component -> would be how i use it in future
  // React.useEffect(() => {
  //   const tabChange = navigation.addListener("blur", (_e) => {
  //     navigation.dispatch(StackActions.popToTop());
  //   });
  //   return tabChange;
  // }, [navigation]);
  return (
    <Stacker.Navigator initialRouteName={params}>
      <Stacker.Screen
        name={params}
        component={rootComponent}
        options={{ headerShown: false }}
      />
      <Stacker.Screen name="Game" component={screens.Game} />
      <Stacker.Screen name="Player" component={screens.Player} />
      <Stacker.Screen name="Team" component={screens.Team} />
    </Stacker.Navigator>
  );
};

export default Stack;
