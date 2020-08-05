import React from "react";
import { View, Text, Button } from "react-native";
import { Colored, Colorless } from "../globals/Styles";
import Colors from "../globals/Colors";
import { Props, MyRouteProp, ParamList, StackParamList } from "../globals/Types";
import { useRoute, RouteProp } from "@react-navigation/native";

// Implementation logic:

// this component can just update from API every couple seconds while looking at
// it, but only once if not actively in a game, then it should
// schedule it's next check for next game's start time (retrieve from player's
// team API)

const Player: React.FC<Props> = (props) => {
  const { navigation } = props;
  const route = useRoute<RouteProp<StackParamList, "Player">>();
  console.log(route.params.ID);
  const coloredStyles = Colored();
  return (
    <View style={coloredStyles.stackedScreen}>
      <Text
        style={{
          color: coloredStyles.screenText.color,
          fontSize: Colorless.mediumText.fontSize,
        }}
      >Player #{route.params.ID}</Text>
      <Button
        title="Bottom"
        color={coloredStyles.notification.backgroundColor}
        onPress={() => {
          navigation.navigate("Game", { ID: 22 });
        }}
      />
    </View>
  );
};

export default Player;
