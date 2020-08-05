import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

export type TabNavigationProp = MaterialTopTabNavigationProp<ParamList>;

export type ScreenNavigationProp = CompositeNavigationProp<
  TabNavigationProp,
  DetailsNavigationProp
>;

// only access to top level
export type ParamList = {
  Teams: { names: string[] };
  Players: { names: string[] };
  News: { names: string[] };
};

export type DetailsNavigationProp = StackNavigationProp<StackParamList>;

// this should get access to everything
export type StackParamList = {
  Teams: { names: string[] };
  Players: { names: string[] };
  News: { names: string[] };
  Player: { ID: number };
  Game: { ID: number };
  Team: { ID: number };
};

export interface Props {
  navigation: DetailsNavigationProp;
  route: MyRouteProp;
}

export interface ScreenProps {
    navigation: ScreenNavigationProp;
    route: ScreenRouteProp;
}

type MyRouteProp = RouteProp<StackParamList, keyof StackParamList>;
type ScreenRouteProp = RouteProp<ParamList, keyof ParamList>;

export type TeamAbbrev = {
  atl: boolean;
  bkn: boolean;
  bos: boolean;
  cha: boolean;
  chi: boolean;
  cle: boolean;
  dal: boolean;
  den: boolean;
  det: boolean;
  gsw: boolean;
  hou: boolean;
  ind: boolean;
  // these are different, need to look up
  lac: boolean;
  lal: boolean;
  mem: boolean;
  mia: boolean;
  mil: boolean;
  min: boolean;
  nop: boolean;
  nyk: boolean;
  okc: boolean;
  orl: boolean;
  phi: boolean;
  phx: boolean;
  por: boolean;
  sac: boolean;
  sas: boolean;
  tor: boolean;
  uta: boolean;
  was: boolean;
}

export interface Favorites {
  teams: Array<TeamAbbrev>;
  players: Array<number>;
}