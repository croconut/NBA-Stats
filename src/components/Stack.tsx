import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StackParamList, Props, ScreenProps } from "../globals/Types";
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

const Stack: React.FC<Props> = (props) => {
  const { navigation, route } = props;
  const params = route.name;
  const rootComponent: React.FC<any> = screens[params];
  return (
    <Stacker.Navigator initialRouteName={params}>
      <Stacker.Screen
        name={params}
        component={rootComponent}
        options={{ headerShown: false }}
      />
      <Stacker.Screen name="Game" component={Components.Game} />
      <Stacker.Screen name="Player" component={Components.Player} />
      <Stacker.Screen name="Team" component={Components.Team} />
    </Stacker.Navigator>
  );
};

export default Stack;
