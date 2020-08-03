import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  name?: string,
  enthusiasmLevel?: number,
  children?: React.ReactNode,
}

//showing property expansion for passing properties
//children should be react.reactnode and enclosed in a fragment
//to prevent undef / null / boolean passing
const App: React.FC<Props> = (props) => {
  const { name, enthusiasmLevel, children, ...otherProps } = props;
  return (
    <View {...otherProps} style={styles.container}>
      <Text>Start the app!</Text>
      <>{children}</>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
