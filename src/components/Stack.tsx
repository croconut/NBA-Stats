import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  StackParamList,
  Props
} from "../globals/Types";
import * as Components from "./Components";
import * as Screens from "../screens/Screens";

// needs manual updates for these but it should hardly ever change 
const SCREENS = ["News", "Players", "Teams"];

const GetComponentName = (name: string) => {
  let rootComponent;
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

const Stacker = createStackNavigator<StackParamList>();

const Stack: React.FC<Props> = (props) => {
  const { navigation, route } = props;
  const params = route != undefined ? route.name : "Players";
  const rootComponent: React.FC<any> = GetComponentName(params);
  return (
    <Stacker.Navigator initialRouteName={params} >
      <Stacker.Screen name={params} component={rootComponent} />
      <Stacker.Screen name="Game" component={Components.Game} />
      <Stacker.Screen name="Player" component={Components.Player} />
      <Stacker.Screen name="Team" component={Components.Team} />
    </Stacker.Navigator>
  );
};

export default Stack;
