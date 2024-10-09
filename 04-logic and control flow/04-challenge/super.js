

function calculator (num1, num2, operator){

    switch (operator){
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
        break;
        default:
        console.log('not an valid operator');
        
    }


}


var result = calculator(5 , 2, '*');

console.log(result);
