import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const NumButton = (props: { value: string, setValue: any, textVal: any[] }) => {
    function appendNumber () {
        props.setValue(props.textVal[props.textVal.length - 1] += props.value)
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