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


const NumButton = (props: { num: string, setValue: any, textVal: string }) => {
  return (
    <View style={`styles.numButtons`}>
      <Button onPress={() => props.setValue(props.textVal + props.num)} title={props.num} />
    </View>
  )
}

const App: () => JSX.Element = () => {
  const [textVal, setValue] = useState('');

  return (
    <View style={styles.container}>
      <Text>{textVal}</Text>
      <NumButton num="1" setValue={setValue} textVal={textVal} />
      <NumButton num="2" setValue={setValue} textVal={textVal} />
      <NumButton num="3" setValue={setValue} textVal={textVal} />
      <NumButton num="4" setValue={setValue} textVal={textVal} />
      <NumButton num="5" setValue={setValue} textVal={textVal} />
      <NumButton num="6" setValue={setValue} textVal={textVal} />
      <NumButton num="7" setValue={setValue} textVal={textVal} />
      <NumButton num="8" setValue={setValue} textVal={textVal} />
      <NumButton num="9" setValue={setValue} textVal={textVal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexBasis: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
  },
  num: {
    flexBasis: '33%',
  },
});

export default App;
