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
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


const NumButton = (props: { num: string, setValue: any, textVal: string }) => {
  return (
    <View style={styles.button}>
      <Button onPress={() => props.setValue(props.textVal + props.num)} title={props.num} />
    </View>
  )
}


const App: () => JSX.Element = () => {
  const [textVal, setValue] = useState('');

  const CONTENT = {
    tableHead: [<Text style={styles.label}>{textVal}</Text>],
    tableData: [
      [
        <NumButton num="1" setValue={setValue} textVal={textVal} />,
        <NumButton num="2" setValue={setValue} textVal={textVal} />,
        <NumButton num="3" setValue={setValue} textVal={textVal} />,
      ],
      [
        <NumButton num="4" setValue={setValue} textVal={textVal} />,
        <NumButton num="5" setValue={setValue} textVal={textVal} />,
        <NumButton num="6" setValue={setValue} textVal={textVal} />,
      ],
      [
        <NumButton num="7" setValue={setValue} textVal={textVal} />,
        <NumButton num="8" setValue={setValue} textVal={textVal} />,
        <NumButton num="9" setValue={setValue} textVal={textVal} />,
      ]
    ]
  }

  return (
    <View style={styles.container}>
      <View>
        <Table style={styles.table}>
          <Row
            data={CONTENT.tableHead}
            flexArr={[1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={CONTENT.tableData}
              flexArr={[1, 1, 1]}
              style={styles.row}
              textStyle={styles.text}
            />
          </TableWrapper>
        </Table>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 50, backgroundColor: '#262a33' },
  head: { height: 50, backgroundColor: '#23262e' },
  wrapper: { flexDirection: 'row' },
  row: { height: 40, backgroundColor: '#23262e' },
  text: { textAlign: 'center' },
  label: { textAlign: 'right', color: 'white', fontSize: 20, padding: 10 },
  button: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto' },
  table: { borderRadius: 100 }
});

export default App;
