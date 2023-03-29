import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

class parentheses {
    parenID: number = 0;
    value: string = "";

    constructor(parenID: number, value: string) {
        this.parenID = parenID;
        this.value = value;
    }

    public toString() {
        return this.value;
    }
}

const ParenButton = (props: { setInParentheses: any, inParentheses: boolean, setValue: any, textVal: any[], curParenID: number, setCurParenID: any }) => {
    function paren() {
        // if (props.inParentheses) {
        //     props.setValue(props.textVal + ')')
        //     props.setInParentheses(false)
        // }

        // else {
        //     props.setValue(props.textVal + '(')
        //     props.setInParentheses(true)
        // }

        if (
            props.textVal[props.textVal.length - 2] == "*" ||
            props.textVal[props.textVal.length - 2] == "/" ||
            props.textVal[props.textVal.length - 2] == "+" ||
            props.textVal[props.textVal.length - 2] == "-" ||
            props.textVal[props.textVal.length - 2] == undefined
        ) {
            var obj = new parentheses(props.curParenID, "(")
            // console.log(props.textVal);
            props.setValue(props.textVal.push(obj));
            props.setCurParenID(props.curParenID + 1);
        }

        else {
            props.setValue(props.textVal.push(new parentheses(props.curParenID, ")")));
            props.setCurParenID(props.curParenID - 1);
        }


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