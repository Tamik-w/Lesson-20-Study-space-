let number = prompt('Enter number: ', '0');

let count = prompt('Enter count: ', '0');

function three(number,count) {
    for(let i = 0; i < count; i++){
       number = number + 3;
    }

    let newNumber = number;
    return newNumber;
}

alert(three(+number,+count));