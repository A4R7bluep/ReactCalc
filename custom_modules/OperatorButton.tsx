import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const OperatorButton = (props: { value: string, setValue: any, textVal: any[] }) => {
    function operator() {
        var localTextVal = props.textVal;
        localTextVal.push(props.value);
    }

    return (
        <View style={styles.mainButtons}>
            <Button onPress={() => operator()} title={props.value} />
        </View>
    )
}

const styles = StyleSheet.create({
    mainButtons: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto' },
});


export default OperatorButton;