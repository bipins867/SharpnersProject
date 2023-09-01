var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var button = document.querySelector('button');
var numResult = [];
var stringResult = [];
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
button.onclick = function (event) {
    var val1 = num1.value;
    var val2 = num2.value;
    var res1 = addSum(+val1, +val2);
    var res2 = addSum(val1, val2);
    console.log(res1);
    console.log(res2);
    numResult.push(res1);
    stringResult.push(res2);
    printResult({ val: res1, timestamp: new Date() });
    console.log(numResult);
    console.log(stringResult);
};
