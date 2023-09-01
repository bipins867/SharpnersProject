"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const button = document.querySelector('button');
const numResult = [];
const stringResult = [];
function addSum(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(result) {
    console.log(result.val);
}
button.onclick = (event) => {
    const val1 = num1.value;
    const val2 = num2.value;
    const res1 = addSum(+val1, +val2);
    const res2 = addSum(val1, val2);
    console.log(res1);
    console.log(res2);
    numResult.push(res1);
    stringResult.push(res2);
    printResult({ val: res1, timestamp: new Date() });
    console.log(numResult);
    console.log(stringResult);
};
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("IT worked");
    }, 3000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
