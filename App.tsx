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

var textVal = 'text';

interface IProps {
  num: string;
}

interface IState {
  textVal?: string;
}

class NumButton extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    // this.state = {
    //   textVal: '',
    // };

    this.addToCalcStr = this.addToCalcStr.bind(this);
  }

  addToCalcStr(adder: string) {
    // this.setState({textVal: textVal + adder});
    textVal = textVal + adder;
    console.log(textVal)
  }

  render() {
    return (
      <View>
        <Text>{textVal}</Text>
        <Button onPress={() => this.addToCalcStr(this.props.num)} title={this.props.num} />
      </View>
    );
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{textVal}</Text>
      <NumButton num="1" />
      {/* <Button onPress={() => setValue(textVal + '1')} title={'1'} /> */}
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