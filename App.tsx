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

import NumButton from './custom_modules/NumButton';
import OperatorButton from './custom_modules/OperatorButton';
import ClearButton from './custom_modules/ClearButton';
import ParenButton from './custom_modules/ParenButton';
import NegativeButton from './custom_modules/NegativeButton';
import DeleteButton from './custom_modules/DeleteButton';
import EqualsButton from './custom_modules/EqualsButton';


const App: () => JSX.Element = () => {
    const [textVal, setValue] = useState([]);
    const [inParentheses, setInParentheses] = useState(false);
    const [curParenID, setCurParenID] = useState(0);

    const CONTENT = {
        tableHead: [<Text style={styles.label}>{textVal}</Text>],
        tableData: [
            [
                <ClearButton setValue={setValue} setInParentheses={setInParentheses} />,
                <ParenButton setInParentheses={setInParentheses} inParentheses={inParentheses} setValue={setValue} textVal={textVal} curParenID={curParenID} setCurParenID={setCurParenID} />,
                <DeleteButton setValue={setValue} textVal={textVal} />,
                <OperatorButton value="/" setValue={setValue} textVal={textVal} />,
            ],
            [
                <NumButton value="7" setValue={setValue} textVal={textVal} />,
                <NumButton value="8" setValue={setValue} textVal={textVal} />,
                <NumButton value="9" setValue={setValue} textVal={textVal} />,
                <OperatorButton value="*" setValue={setValue} textVal={textVal} />,
            ],
            [
                <NumButton value="4" setValue={setValue} textVal={textVal} />,
                <NumButton value="5" setValue={setValue} textVal={textVal} />,
                <NumButton value="6" setValue={setValue} textVal={textVal} />,
                <OperatorButton value="-" setValue={setValue} textVal={textVal} />,
            ],
            [
                <NumButton value="1" setValue={setValue} textVal={textVal} />,
                <NumButton value="2" setValue={setValue} textVal={textVal} />,
                <NumButton value="3" setValue={setValue} textVal={textVal} />,
                <OperatorButton value="+" setValue={setValue} textVal={textVal} />,
            ],
            [
                <NegativeButton setValue={setValue} textVal={textVal} setInParentheses={setInParentheses} inParentheses={inParentheses} />,
                <NumButton value="0" setValue={setValue} textVal={textVal} />,
                <OperatorButton value="." setValue={setValue} textVal={textVal} />,
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
});

export default App;
