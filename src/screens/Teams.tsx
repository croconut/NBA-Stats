import React from "react";
import { View, Text, Button } from "react-native";
import { ScreenNavigationProp } from "../globals/Types";
import { Colored, Colorless } from "../globals/Styles";

interface Props {
  navigation: ScreenNavigationProp;
}

const dummy: Array<string> = ["big dummy"];

const Teams: React.FC<Props> = (props) => {
  const { navigation } = props;
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
            navigation.navigate("Players", dummy);
          }}
        />
        <Button
          title="Top"
          color={notificationStyle.backgroundColor}
          onPress={() => {
            navigation.navigate("News", dummy);
          }}
        />
      </View>
    </View>
  );
};

export default Teams;
