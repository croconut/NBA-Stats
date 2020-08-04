import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colored, Colorless} from "./src/globals/Styles";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontScalar from "./src/responsive/FontScalar";
import { TopTabsParamList } from "./src/globals/Types";
import * as Screens from "./src/screens/Screens";

const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator<TopTabsParamList>();


const App: React.FC = (props) => {
  const coloredStyles = Colored();
  const textColor = coloredStyles.screenText;
  return (
    <View style={coloredStyles.screen}>
      <Text style={{...Colorless.largeText, ...textColor}}>Welcome</Text>
    </View>
  );
}

export default App;
