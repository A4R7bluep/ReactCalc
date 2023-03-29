import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const DeleteButton = (props: { setValue: any, textVal: any[] }) => {
    function deleteLastItem () {
        var localTextVal = props.textVal;
        props.setValue(localTextVal.pop());

        return (localTextVal)
    }

    return (
        <View style={styles.deleteButton}>
            <Button onPress={() => deleteLastItem()} title='⌫' />
        </View>
    )
}

const styles = StyleSheet.create({
    deleteButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto' },
});


export default DeleteButton;