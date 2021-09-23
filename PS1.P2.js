//Problem 2
const evaluate = expression => {
    const left = expression[0];
    const operation = expression[1];
    const right = expression[2];
    switch(operation) {
        case '+':
            return (parseInt(left) + parseInt(right));
            break;
        case '-':
            return (parseInt(left) - parseInt(right));
            break;
        case '*':
            return (parseInt(left) * parseInt(right));
            break;
        case '/':
            return (parseInt(left) / parseInt(right));
            break;
        case '^':
            return (parseInt(left) ** parseInt(right));
            break;
    }
}
const eval = expression => {
    let operator = evaluate(expression);
    console.log(`${expression} = ${operator}`);
}

//Test eval()
// eval('4+2');
// eval('5*7');
// eval('6-1');
// eval('9/2');
// eval('2^8');

