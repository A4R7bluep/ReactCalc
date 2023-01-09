/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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

var calcStr = "";

// function updateCalcStr(mod: string) {
// 	calcStr += mod;
// }

const CalcButton = (props: { number: string; }) => {
	return (
		<Button onPress={() => calcStr += props.number} title={props.number}></Button>
	);
}

export default function App() {
	return (
		<View style={styles.container}>
			<Text>{calcStr}</Text>
			<CalcButton number="1" ></CalcButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});