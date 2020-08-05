import React from "react";
import { ScreenProps } from "../globals/Types";
import { RouteProp, StackActions } from "@react-navigation/native";
import { View, Text, Button, ViewStyle } from "react-native";
import { Colored, Colorless } from "../globals/Styles";

//dont actually want the material top tabs in future
//will actually want to be able to navigate to specific screens so having this
//here is probably good

const Teams: React.FC<ScreenProps> = (props) => {
  const { navigation, route } = props;
  const coloredStyles = Colored();
  const parentStyle = coloredStyles.stackedScreen;
  const notificationStyle = coloredStyles.notification;
  const textColor = coloredStyles.screenText.color;
  return (
    <View style={parentStyle}>
      <Text style={{ ...Colorless.largeText, ...{ color: textColor } }}>
        Details
      </Text>
      <View style={Colorless.horizontalRow}>
        <Button
          title="Bottom"
          color={notificationStyle.backgroundColor}
          onPress={() => {
            navigation.navigate("Player", { ID: 7 });
          }}
        />
        <Button
          title="Top"
          color={notificationStyle.backgroundColor}
          onPress={() => {
            navigation.navigate("News", route.params);
          }}
        />
      </View>
    </View>
  );
};

export default Teams;
