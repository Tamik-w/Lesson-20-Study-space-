let firstNumber = prompt("Enter your first number: ", "0");
let secondNumber = prompt("Enter your second number: ", "0");

function maxNumber(a,b) {
    if(a > b){
        return `Number ${+a} more than number ${+b}`;
    }else if(a < b){
        return `Number ${+a} less than number ${+b}`;
    }else if(a = b){
        return `Number ${+a} equal number ${+b}`;
    }else{
        return 'Please refresh the page and enter only numbers!';
    }
}

alert(maxNumber(+firstNumber,+secondNumber));