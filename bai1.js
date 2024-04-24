function calculate(operation){
    let inputA=document.getElementById('inputA').value;
    let inputB=document.getElementById('inputB').value;
    let resultElement=document.getElementById('result');
    if(!inputA || !inputB || isNaN(inputA) || isNaN(inputB)){
        resultElement.innerText='Please enter valid numbers in both fields';
        return;
    }
    inputA=parseFloat(inputA);
    inputB=parseFloat(inputB);
    let result;
    switch(operation){
        case 'sum':
            result=inputA+inputB;
            break;
        case 'subtract':
            result=inputA-inputB;
            break;
        case 'multiply':
            result=inputA*inputB;
            break;
        case 'divide':
            result=inputA/inputB;
            break;
        default:
            result='invalid operation';
    }
    resultElement.innerText=`Result:${result}`;
}
function resetInputs(){
    document.getElementById('inputA').value='';
    document.getElementById('inputB').value='';
    document.getElementById('result').value='';
}