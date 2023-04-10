import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class parentheses {
    parenID: number = 0;
    value: string = "";

    constructor(parenID: number, value: string) {
        this.parenID = parenID;
        this.value = value;
    }

    // public toString() {
    //     return this.value;
    // }
}

const ParenButton = (props: { setInParentheses: any, inParentheses: boolean, setValue: any, textVal: any[], curParenID: number, setCurParenID: any }) => {
    function paren() {
        var localTextVal = props.textVal;

        if (
            localTextVal[localTextVal.length - 2] == "*" ||
            localTextVal[localTextVal.length - 2] == "/" ||
            localTextVal[localTextVal.length - 2] == "+" ||
            localTextVal[localTextVal.length - 2] == "-" ||
            localTextVal[localTextVal.length - 2] == undefined
        ) {
            props.setValue(localTextVal.push(new parentheses(props.curParenID, "(")));
            props.setCurParenID(props.curParenID + 1);
        }

        else {
            props.setValue(localTextVal.push(new parentheses(props.curParenID, ")")));
            props.setCurParenID(props.curParenID - 1);
        }
        console.log(`paren: ${typeof localTextVal}`);
    }

    return (
        <View style={styles.parenButton}>
            <Button onPress={() => paren()} title='()' />
        </View>
    )
}

const styles = StyleSheet.create({
    parenButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'blue' },
});


export default ParenButton;