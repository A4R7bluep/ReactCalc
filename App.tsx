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
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';


const MainButton = (props: { value: string, setValue: any, textVal: string }) => {
  return (
    <View style={styles.mainButtons}>
      <Button onPress={() => props.setValue(` ${props.textVal + props.value} `)} title={props.value} />
    </View>
  )
}

const ClearButton = (props: { setValue: any, setInParentheses: any }) => {
  function clear() {
    props.setValue('')
    props.setInParentheses(false)
  }

  return (
    <View style={styles.clearButton}>
      <Button onPress={() => clear()} title="C" />
    </View>
  )
}

const ParenButton = (props: { setInParentheses: any, inParentheses: boolean, setValue: any, textVal: string }) => {
  function paren() {
    if (props.inParentheses) {
      props.setValue(props.textVal + ')')
      props.setInParentheses(false)
    }

    else {
      props.setValue(props.textVal + '(')
      props.setInParentheses(true)
    }
  }

  return (
    <View style={styles.parenButton}>
      <Button onPress={() => paren()} title='()' />
    </View>
  )
}

const NegativeButton = (props: { setValue: any, textVal: string, setInParentheses: any, inParentheses: boolean }) => {
  function negative() {
    if (props.inParentheses) {
      props.textVal.indexOf('(-1*')
      props.setInParentheses(false)
    }

    else {
      props.setValue(props.textVal + '(-1*')
      props.setInParentheses(true)
    }
  }

  return (
    <View style={styles.negativeButton}>
      <Button onPress={() => negative()} title='+/-' />
    </View>
  )
}

const DeleteButton = (props: { setValue: any, textVal: string }) => {
  return (
    <View style={styles.deleteButton}>
      <Button onPress={() => props.setValue(props.textVal.slice(0, -1))} title='⌫' />
    </View>
  )
}

const EqualsButton = (props: { setValue: any, textVal: string }) => {
  function arithmetic(terms: any[]) {
    var computedTerms = [];

    for (let i = 0; i < terms.length; i++) {
      var term = terms[i].split(" ");

      for (let a = 0; a < term.length; a++) {
        if (term[a] == "+") {
          computedTerms.push(Number(term[a - 1]) + Number(term[a + 1]));
        }

        if (term[a] == "-") {
          computedTerms.push(Number(term[a - 1]) - Number(term[a + 1]));
        }

        if (term[a] == "*") {
          computedTerms.push(Number(term[a - 1]) * Number(term[a + 1]));
        }

        if (term[a] == "/") {
          computedTerms.push(Number(term[a - 1]) / Number(term[a + 1]));
        }
      }
    }

    return (computedTerms);
  }

  function evaluate(localTextVal: string) {
    
  }

  return (
    <View style={styles.equalsButton}>
      <Button onPress={() => evaluate(props.textVal)} title='=' />
    </View>
  )
}


const App: () => JSX.Element = () => {
  const [textVal, setValue] = useState('');
  const [inParentheses, setInParentheses] = useState(false);

  const CONTENT = {
    tableHead: [<Text style={styles.label}>{textVal}</Text>],
    tableData: [
      [
        <ClearButton setValue={setValue} setInParentheses={setInParentheses} />,
        <ParenButton setInParentheses={setInParentheses} inParentheses={inParentheses} setValue={setValue} textVal={textVal} />,
        <DeleteButton setValue={setValue} textVal={textVal} />,
        <MainButton value="/" setValue={setValue} textVal={textVal} />,
      ],
      [
        <MainButton value="7" setValue={setValue} textVal={textVal} />,
        <MainButton value="8" setValue={setValue} textVal={textVal} />,
        <MainButton value="9" setValue={setValue} textVal={textVal} />,
        <MainButton value="*" setValue={setValue} textVal={textVal} />,
      ],
      [
        <MainButton value="4" setValue={setValue} textVal={textVal} />,
        <MainButton value="5" setValue={setValue} textVal={textVal} />,
        <MainButton value="6" setValue={setValue} textVal={textVal} />,
        <MainButton value="-" setValue={setValue} textVal={textVal} />,
      ],
      [
        <MainButton value="1" setValue={setValue} textVal={textVal} />,
        <MainButton value="2" setValue={setValue} textVal={textVal} />,
        <MainButton value="3" setValue={setValue} textVal={textVal} />,
        <MainButton value="+" setValue={setValue} textVal={textVal} />,
      ],
      [
        <NegativeButton setValue={setValue} textVal={textVal} setInParentheses={setInParentheses} inParentheses={inParentheses} />,
        <MainButton value="0" setValue={setValue} textVal={textVal} />,
        <MainButton value="." setValue={setValue} textVal={textVal} />,
        <EqualsButton setValue={setValue} textVal={textVal} />,
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
  table: { borderRadius: 100 },

  mainButtons: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto' },
  clearButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'red' },
  parenButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'blue' },
  negativeButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'blue' },
  deleteButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto' },
  equalsButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'green' },
});

export default App;
