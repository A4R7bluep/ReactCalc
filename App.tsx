/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { type PropsWithChildren, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

// const text = (props: { num: string }) => {
//   return (
//     <Text>{props.num}</Text>
//   )
// }

labelVal = '';

const NumButton = (props: { num: string }) => {
  const [textVal, setValue] = useState('');

  function addToCalcStr(props: { adder: string }) {
    setValue(textVal + props.adder);
    labelVal = textVal;
  }

  return (
    <Button onPress={() => addToCalcStr({ adder: props.num })} title={props.num} />
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{labelVal}</Text>
      <NumButton num="1" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});