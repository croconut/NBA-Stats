import React, { useState } from "react";
import { Dark, Light } from "./src/globals/Colors";
import { Colored } from "./src/globals/Styles";
import {
  NavigationContainer,
} from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ParamList } from "./src/globals/Types";
import Stack from "./src/components/Stack";

const TopTabs = createMaterialTopTabNavigator<ParamList>();

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const coloredStyles = Colored();
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
        tabBarOptions={{
          scrollEnabled: true,
          allowFontScaling: true,
        }}
        initialRouteName="News"
        keyboardDismissMode="auto"
      >
        <TopTabs.Screen
          name="News"
          component={Stack}
          // listeners={{
          //   tabPress: e => {
          //     // need redux to do this. this also likely needs to be
          //     // on a component
          //   },
          // }}
        />
        <TopTabs.Screen name="Teams" component={Stack} />
        <TopTabs.Screen name="Players" component={Stack} />
      </TopTabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
