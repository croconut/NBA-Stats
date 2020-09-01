import React from "react";
import { View, Text, Button } from "react-native";
import { Colored, Colorless } from "../globals/Styles";
import { Props, StackParamList } from "../globals/Types";
import { useRoute, RouteProp } from "@react-navigation/native";

// Implementation logic:

// component should check if the gameID currently stored in the object store
// has this gameID with the completed tag
// if it is just render with info from the object store, else request a render
// from the web if it has been more than 10 seconds since last request

const Game: React.FC<Props> = (props) => {
  const { navigation } = props;
  const route = useRoute<RouteProp<StackParamList, "Game">>();
  const coloredStyles = Colored();
  return (
    <View style={coloredStyles.stackedScreen}>
      <Text
        style={{
          color: coloredStyles.screenText.color,
          fontSize: Colorless.mediumText.fontSize,
        }}
      >
        Game #{route.params.ID}
      </Text>
      <Button
        title="Bottom"
        color={coloredStyles.notification.backgroundColor}
        onPress={() => {
          navigation.navigate("Player", { ID: 22 });
        }}
      />
    </View>
  );
};

export default Game;
