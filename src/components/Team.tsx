import React from "react";
import { View, Text } from "react-native";
import { Colored } from "../globals/Styles";

interface Props {
  teamID: string;
}

// component should be very similar to player: always do an API update on load
// and check for ongoing games

const Team: React.FC<Props> = ({ teamID }) => {
  const coloredStyles = Colored();
  return (
    <View style={coloredStyles.screen}>
      <Text></Text>
    </View>
  );
};

export default Team;
