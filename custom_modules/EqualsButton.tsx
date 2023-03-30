import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

function count(value: any, array: any[]) {
    let count = 0;

    array.forEach(item => {
        if (item === value) {
            count++
        }
    });

    return count
}

const EqualsButton = (props: { setValue: any, textVal: any[] }) => {
    console.log(props.textVal);
    var localTextVal = props.textVal;

    for (var i = 0; i < localTextVal.length; i++) {
        if (typeof parseInt(localTextVal[i]) == "number" && typeof parseInt(localTextVal[i + 1]) == "number") {
            localTextVal[i] += localTextVal[i + 1];
        }
    }

    function arithmetic(localTextVal: any[]) {
        // var splitString = localTextVal.split(" ");
        var splitString = localTextVal;

        var numOfMult = 0;
        var numOfDiv = 0;
        var numOfAdd = 0;
        var numOfSubt = 0;

        for (var i = 0; i < localTextVal.length; i++) {
            if (localTextVal[i] == "*") {
                numOfMult++
            }
            if (localTextVal[i] == "/") {
                numOfDiv++
            }
            if (localTextVal[i] == "+") {
                numOfAdd++
            }
            if (localTextVal[i] == "-") {
                numOfSubt++
            }
        }

        var numOfMultAndDiv = numOfMult + numOfDiv;
        var numOfAddAndSubt = numOfAdd + numOfSubt;

        for (var numOfMultAndDivLeft = 0; numOfMultAndDivLeft < numOfMultAndDiv; numOfMultAndDivLeft++) {
            for (var splitIndex = 0; splitIndex < splitString.length; splitIndex++) {
                if (splitString[splitIndex] == "*") {
                    var number1 = Number(splitString[splitIndex - 1]);
                    var number2 = Number(splitString[splitIndex + 1]);

                    splitString.splice(splitIndex, 2);

                    splitString[splitIndex - 1] = (number1 * number2).toString();
                }

                else if (splitString[splitIndex] == "/") {
                    var number1 = Number(splitString[splitIndex - 1]);
                    var number2 = Number(splitString[splitIndex + 1]);

                    splitString.splice(splitIndex, 2);

                    splitString[splitIndex - 1] = (number1 / number2).toString();
                }
            }
        }

        for (var numOfAddAndSubtLeft = 0; numOfAddAndSubtLeft < numOfAddAndSubt; numOfAddAndSubtLeft++) {
            for (var splitIndex = 0; splitIndex < splitString.length; splitIndex++) {
                if (splitString[splitIndex] == "+") {
                    var number1 = Number(splitString[splitIndex - 1]);
                    var number2 = Number(splitString[splitIndex + 1]);

                    splitString.splice(splitIndex, 2);

                    splitString[splitIndex - 1] = (number1 + number2).toString();
                }

                else if (splitString[splitIndex] == "-") {
                    var number1 = Number(splitString[splitIndex - 1]);
                    var number2 = Number(splitString[splitIndex + 1]);

                    splitString.splice(splitIndex, 2);

                    splitString[splitIndex - 1] = (number1 - number2).toString();
                }
            }
        }

        return (Number(splitString[0]));
    }

    function evaluate(localTextVal: any[]) {
        // localTextVal = localTextVal.trim();
        var answer = 0;


        if (localTextVal.includes("(") || localTextVal.includes(")")) {
            var numOfOpenParen = count("(", localTextVal);
            var numOfCloseParen = count(")", localTextVal);

            if (numOfOpenParen == numOfCloseParen) {
                var numOfParen = numOfOpenParen;
            }
            else {
                throw new Error("Number of opening parentheses not the same as closing parentheses");
            }

            var parenIndices = [];
            for (i = 0; i < localTextVal.length; i++) {
                if (localTextVal[i] == "(" || ")") {
                    parenIndices[localTextVal[i].parenID] = i;
                }
            }

            for (var i = 0; i < numOfParen; i++) {
                var beginningParens: number[][] = [];
                var endingParens: number[][] = [];
                var expressionsInParen: any[][] = [];
                var values = [];

                for (var item = 0; item < localTextVal.length; item++) {
                    if (typeof localTextVal[item] == "object") {
                        if (localTextVal[item].value == "(") {
                            beginningParens[localTextVal[item].parenID].push(item);
                        }

                        if (localTextVal[item].value == ")") {
                            endingParens[localTextVal[item].parenID].push(item);
                        }
                    }
                }

                for (var index = beginningParens.length; index > 0; index--) {
                    expressionsInParen.push([localTextVal.slice(beginningParens[index][1], endingParens[index][1])]);
                    console.log(expressionsInParen);
                }
            }
        }

        for (var char = 1; char < localTextVal.length; char++) {
            localTextVal[0] += localTextVal[char];
        }

        console.log(`Debugging : ${typeof localTextVal}`);

        answer = arithmetic(localTextVal[0]);

        props.setValue(answer);
    }

    return (
        <View style={styles.equalsButton}>
            <Button onPress={() => evaluate(localTextVal)} title='=' />
        </View>
    )
}

const styles = StyleSheet.create({
    equalsButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'green' },
});


export default EqualsButton;