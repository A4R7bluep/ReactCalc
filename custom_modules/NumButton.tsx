import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const NumButton = (props: { value: string, setValue: any, textVal: any[] }) => {

    function appendNumber() {
        var localTextVal = props.textVal;
        console.log(!isNaN(localTextVal[localTextVal.length - 1]));
        console.log(!isNaN(parseFloat(localTextVal[localTextVal.length - 1])))

        if (
            !isNaN(localTextVal[localTextVal.length - 1]) &&
            !isNaN(parseFloat(localTextVal[localTextVal.length - 1]))
        ) {
            localTextVal[localTextVal.length - 1] += props.value;
        }
        else {
            localTextVal.push(props.value);
        }
        props.setValue(localTextVal);
    }

    return (
        <View style={styles.mainButtons}>
            <Button onPress={() => appendNumber()} title={props.value} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainButtons: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto' },
});


export default NumButton;