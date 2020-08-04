import React from "react";
import { View, Text } from "react-native";
import { Colored, Colorless } from "../globals/Styles";
import Colors from "../globals/Colors";

const Players: React.FC = (props) => {
  const coloredStyles = Colored();
  return (
    <View style={coloredStyles.stackedScreen}>
      <Text style={{ ...Colorless.largeText, ...coloredStyles.screenText }}>
        Players
      </Text>
    </View>
  );
};

export default Players;
