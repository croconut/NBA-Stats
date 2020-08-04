import React from "react";
import { ScreenNavigationProp } from "../globals/Types";
import { View, Text, Button, ViewStyle } from "react-native";
import { Colored, Colorless } from "../globals/Styles";

//dont actually want the material top tabs in future
//will actually want to be able to navigate to specific screens so having this
//here is probably good


interface Props {
  navigation: ScreenNavigationProp;
}

const dummy: Array<string> = ["team1", "team2"];

const Home: React.FC<Props> = (props) => {
  const { navigation } = props;
  const coloredStyles = Colored();
  const parentStyle: ViewStyle = coloredStyles.stackedScreen;
  const textColor = coloredStyles.screenText.color;
  const notificationStyle: ViewStyle  = coloredStyles.notification;
  return (
    <View style={parentStyle}>
      <Text
        style={{ ...Colorless.largeText, ...{ color: textColor } }}
      >
        Welcome
      </Text>
      <View style={{ paddingTop: "15%" }}>
        <Button
          title="See more"
          color={notificationStyle.backgroundColor}
          onPress={() => {
            navigation.navigate("Teams", dummy);
          }}
        />
      </View>
    </View>
  );
};

export default Home;
