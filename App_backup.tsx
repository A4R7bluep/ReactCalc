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
// function addToCalcStr(props: { adder: string }) {
//   setValue(textVal + props.adder);
// }

const [textVal, setValue] = useState('');

const NumButton = (props: { num: string }) => {
  return (
    <View>
      <Button onPress={() => setValue(textVal + props.num)} title={props.num} />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{textVal}</Text>
      {/* <NumButton num="1" /> */}
      <Button onPress={() => setValue(textVal + '1')} title={'1'} />
      <Text>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
  }
});