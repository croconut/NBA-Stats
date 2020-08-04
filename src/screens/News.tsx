import React from "react";
import { ScreenNavigationProp, ParamList } from "../globals/Types";
import { RouteProp } from '@react-navigation/native';
import { View, Text, Button, ViewStyle } from "react-native";
import { Colored, Colorless } from "../globals/Styles";

//dont actually want the material top tabs in future
//will actually want to be able to navigate to specific screens so having this
//here is probably good

interface Props {
  navigation: ScreenNavigationProp;
  route: MyRouteProp;
}

type MyRouteProp = RouteProp<ParamList, "News">;

const Home: React.FC<Props> = (props) => {
  const { navigation, route } = props;
  const coloredStyles = Colored();
  const parentStyle: ViewStyle = coloredStyles.stackedScreen;
  const textColor = coloredStyles.screenText;
  const notificationStyle: ViewStyle = coloredStyles.notification;
  return (
    <View style={parentStyle}>
      <Text style={{ ...Colorless.largeText, ...textColor }}>
        News
      </Text>
      <Text style={{ ...Colorless.smallText, ...textColor }}>
        On all your favorite players and teams.
      </Text>
      <View style={{ paddingTop: "15%" }}>
        <Button
          title="See more"
          color={notificationStyle.backgroundColor}
          onPress={() => {
            navigation.navigate("Teams", route.params);
          }}
        />
      </View>
    </View>
  );
};

export default Home;
