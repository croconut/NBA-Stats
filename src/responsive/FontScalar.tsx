// credit: https://stackoverflow.com/questions/33628677/react-native-responsive-font-size

import { Dimensions, Platform, PixelRatio } from "react-native";

// unused, but have access to SCREEN_HEIGHT too
const { width: SCREEN_WIDTH } = Dimensions.get("window");

// arbitrary really, just need something to resize a bit
// most tablet/mobile screens are somewhere between 720 and 280 width
const scale: number = SCREEN_WIDTH / 320;

const FontScalar = (size: number):number => {
  const newSize: number = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export default FontScalar;