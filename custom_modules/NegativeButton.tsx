import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NegativeButton = (props: { setValue: any, textVal: any[], setInParentheses: any, inParentheses: boolean }) => {
    function negative() {
        if (props.inParentheses) {
            props.textVal.indexOf('(-1*')
            props.setInParentheses(false)
        }

        else {
            props.setValue(props.textVal.push('(-1*'))
            props.setInParentheses(true)
        }
    }

    return (
        <View style={styles.negativeButton}>
            <Button onPress={() => negative()} title='+/-' />
        </View>
    )
}

const styles = StyleSheet.create({
    negativeButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'blue' },
});


export default NegativeButton;