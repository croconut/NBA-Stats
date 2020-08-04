import React from "react";
import { ScreenNavigationProp, ParamList } from "../globals/Types";
import { RouteProp, useScrollToTop } from "@react-navigation/native";
import { View, Text, Button, ViewStyle, FlatList } from "react-native";
import { Colored, Colorless, IThemedStyles } from "../globals/Styles";
import { ScrollView } from "react-native-gesture-handler";

//dont actually want the material top tabs in future
//will actually want to be able to navigate to specific screens so having this
//here is probably good

interface Props {
  navigation: ScreenNavigationProp;
  route: MyRouteProp;
}

type MyRouteProp = RouteProp<ParamList, "News">;

const Home: React.FC<Props> = (props) => {
  let items: any[] | null | undefined = [];
  for (let i = 0; i < 55; i++) {
    items[i] = i.toString();
  }
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const { navigation, route } = props;
  const coloredStyles = Colored();
  return (
    <FlatList
      style={{ backgroundColor: coloredStyles.stackedScreen.backgroundColor }}
      ListHeaderComponent={() => (
        <Text style={{ ...Colorless.largeText, ...coloredStyles.screenText }}>
          NEWS
        </Text>
      )}
      ref={ref}
      data={items}
      renderItem={(item) => {
        return (
          <Text style={{ ...Colorless.largeText, ...coloredStyles.screenText }}>
            {item.item}
          </Text>
        );
      }}
      keyExtractor={(item) => item}
    />
  );
};

export default Home;
