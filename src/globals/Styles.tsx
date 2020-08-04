import React from "react";
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
// import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import FontScalar from "../responsive/FontScalar";
import { Dark, Light } from "./Colors";
import { Theme } from "./Interfaces";

export interface IThemedStyles {
  screen: ViewStyle;
  screenText: TextStyle;
  notification: ViewStyle;
  stackedScreen: ViewStyle;
}

export interface IStaticStyles {
  smallText: TextStyle;
  mediumText: TextStyle;
  largeText: TextStyle;
  horizontalRow: ViewStyle;
}

//dynamically changes, need to call the function and store the result
export function Colored(): IThemedStyles {
  const theme: Theme = useTheme().dark ? Dark : Light;
  return StyleSheet.create<IThemedStyles>({
    screen: {
      height: "100%",
      marginTop: Constants.statusBarHeight,
      backgroundColor: theme.colors.backgroundSecondary,
      color: theme.colors.textSecondary,
      borderColor: theme.colors.border,
      alignItems: "center",
    },
    screenText: {
      color: theme.colors.textSecondary,
    },
    notification: {
      backgroundColor: theme.colors.notification,
      color: theme.colors.textSecondary,
    },
    // the unstacked screens are special
    // this function also can't be called with normal () => style
    // using get allows to call it like obj.unstackedScreen instead :)
    get stackedScreen() {
      return { ...this.screen, ...{ marginTop: 0 } };
    },
  });
}

export const Colorless: IStaticStyles = StyleSheet.create<IStaticStyles>({
  largeText: {
    fontSize: FontScalar(30),
  },
  mediumText: {
    fontSize: FontScalar(22),
  },
  smallText: {
    fontSize: FontScalar(18),
  },
  horizontalRow: {
    paddingTop: "15%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default Colorless;
