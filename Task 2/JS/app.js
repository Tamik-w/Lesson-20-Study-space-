let number = prompt('Enter you number: ');

function reverseNum(num){
    if(+num >= 1){
        return `${num - num - num}`;

        // OTHER WAYS:
        // return `-${num}`
        // return -Math.abs(num);

    }else if(+num <= -1)
        return `${num - num - num}`;
    else{
        return 'Please refresh page and enter a number!'
    }
    
}

alert(reverseNum(+number));