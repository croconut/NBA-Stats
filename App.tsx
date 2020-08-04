import React, { useState } from "react";
import { Dark, Light } from "./src/globals/Colors";
import { Colored, Colorless } from "./src/globals/Styles";
import { NavigationContainer, CompositeNavigationProp } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import type { Theme } from "@react-navigation/native";
import FontScalar from "./src/responsive/FontScalar";
import { ParamList } from "./src/globals/Types";
import * as Screens from "./src/screens/Screens";
import * as Components from "./src/components/Components";
import Stack from "./src/components/Stack";

const TopTabs = createMaterialTopTabNavigator<ParamList>();

const App: React.FC = (props) => {
  const [isDark, setIsDark] = useState(true);
  const coloredStyles = Colored();
  const textColor = coloredStyles.screenText;
  const MainTheme = isDark ? Dark : Light;
  // setting the primary color to card color for bottom tabs
  // cuz they use primary for their background for some reason...



  return (
    <NavigationContainer theme={MainTheme}>
      <TopTabs.Navigator
        // need to figure out how to reinject the theme
        style={{
          // only needed when this is the top level object
          marginTop: coloredStyles.screen.marginTop,
        }}
      >
        <TopTabs.Screen
          name="News"
          component={Stack}
          options={{ title: "News" }}
          initialParams={{ names: ["hello", "goodbye"]}}
        />
        <TopTabs.Screen
          name="Teams"
          component={Stack}
        />
        <TopTabs.Screen
          name="Players"
          component={Stack}
        />
      </TopTabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
