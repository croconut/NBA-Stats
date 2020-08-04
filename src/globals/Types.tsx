import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";

export type ScreenNavigationProp = MaterialTopTabNavigationProp<
  TopTabsParamList
>;

export type TopTabsParamList = {
  Teams: Array<string>;
  Players: Array<string>;
  News: Array<string>;
};
