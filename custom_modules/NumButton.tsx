import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const NumButton = (props: { value: string, setValue: any, textVal: any[] }) => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    function appendNumber() {
        var localTextVal = props.textVal;
        localTextVal.push(props.value);
        props.setValue(localTextVal);
        // console.log(localTextVal);
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