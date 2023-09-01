const num1=document.getElementById('num1') as HTMLInputElement
const num2=document.getElementById('num2') as HTMLInputElement
const button=document.querySelector('button')!

type numString=number|string;

const numResult:number[]=[] 
const stringResult:string[]=[]

function addSum(num1:numString,num2:numString){
    if(typeof num1 === "number" && typeof num2==="number"){
        return num1+num2
    }
    else if(typeof num1==='string' && typeof num2==='string'){
        return num1+' '+num2
    }

    return +num1 + +num2
}

function printResult(result:{val:number; timestamp:Date}){
    console.log(result.val)
}

button.onclick=(event)=>{
    const val1=num1.value;
    const val2=num2.value;
    const res1=addSum(+val1,+val2);
    const res2=addSum(val1,val2)
    console.log(res1)
    console.log(res2)
    numResult.push(res1 as number)
    stringResult.push(res2 as string)
    printResult({val:res1 as number,timestamp:new Date()})
    console.log(numResult)
    console.log(stringResult)
}