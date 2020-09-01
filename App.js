"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Colors_1 = require("./src/globals/Colors");
var Styles_1 = require("./src/globals/Styles");
var native_1 = require("@react-navigation/native");
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var Stack_1 = require("./src/components/Stack");
var TopTabs = material_top_tabs_1.createMaterialTopTabNavigator();
var App = function () {
    var _a = react_1.useState(true), isDark = _a[0], setIsDark = _a[1];
    var coloredStyles = Styles_1.Colored();
    var MainTheme = isDark ? Colors_1.Dark : Colors_1.Light;
    // setting the primary color to card color for bottom tabs
    // cuz they use primary for their background for some reason...
    return (<native_1.NavigationContainer theme={MainTheme}>
      <TopTabs.Navigator 
    // need to figure out how to reinject the theme
    style={{
        // only needed when this is the top level object
        marginTop: coloredStyles.screen.marginTop,
    }} tabBarOptions={{
        scrollEnabled: true,
        allowFontScaling: true,
    }} initialRouteName="News" keyboardDismissMode="auto">
        <TopTabs.Screen name="News" component={Stack_1.default}/>
        <TopTabs.Screen name="Teams" component={Stack_1.default}/>
        <TopTabs.Screen name="Players" component={Stack_1.default}/>
      </TopTabs.Navigator>
    </native_1.NavigationContainer>);
};
exports.default = App;
