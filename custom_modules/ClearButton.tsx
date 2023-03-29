import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ClearButton = (props: { setValue: any, setInParentheses: any }) => {
    function clear() {
        props.setValue([])
        props.setInParentheses(false)
    }

    return (
        <View style={styles.clearButton}>
            <Button onPress={() => clear()} title="C" />
        </View>
    )
}

const styles = StyleSheet.create({
    clearButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'red' },
});

export default ClearButton;