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

    function arithmetic(localTextVal: string) {
        var splitString = localTextVal.split(" ");

        // console.log(splitString);
        // console.log(localTextVal);

        var numOfMult = localTextVal.split("*").length;
        var numOfDiv = localTextVal.split("/").length;
        var numOfAdd = localTextVal.split("+").length;
        var numOfSubt = localTextVal.split("-").length;

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
        var editable = localTextVal;
        var answer = 0;

        if (localTextVal.includes("(") || localTextVal.includes(")")) {
            var numOfOpenParen = count("(", localTextVal);
            var numOfCloseParen = count(")", localTextVal);

            if (numOfOpenParen == numOfCloseParen) {
                var numOfParen = numOfOpenParen;
                // console.log(numOfParen);
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
                // var beginningParen = localTextVal.indexOf("(");
                // var endingParen = localTextVal.lastIndexOf(")");
                // var expressionInParen = localTextVal.slice(beginningParen + 1, endingParen);
                // var value = arithmetic(expressionInParen);

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

                // editable.splice(beginningParen, endingParen - beginningParen + 1, value.toString());
                // console.log(editable);
                // console.log(`Value: ${value}`);
                // console.log(`expression: ${expressionInParen}`);
            }
        }

        for (var char = 1; char < editable.length; char++) {
            editable[0] += editable[char];
        }

        answer = arithmetic(editable[0]);
        // console.log(`Editable: ${editable}`);
        // console.log(editable);

        props.setValue(answer);
    }

    return (
        <View style={styles.equalsButton}>
            <Button onPress={() => evaluate(props.textVal)} title='=' />
        </View>
    )
}

const styles = StyleSheet.create({
    equalsButton: { width: 40, height: 40, marginRight: 'auto', marginLeft: 'auto', color: 'green' },
});


export default EqualsButton;