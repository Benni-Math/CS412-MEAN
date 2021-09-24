//Problem 2
const evaluate = ([left, operation, right]) => {
    switch(operation) {
        case '+':
            return (input) => Number(left) + Number(right);
            break;
        case '-':
            return (input) => Number(left) - Number(right);
            break;
        case '*':
            return (input) => Number(left) * Number(right);
            break;
        case '/':
            return (input) => Number(left) / Number(right);
            break;
        case '^':
            return (input) => Number(left) ** Number(right);
            break;
    }
}

const eval = (expression) => {
    let operator = evaluate(expression);
    console.log(operator(expression));
}

//Test eval()
// eval('4+2');
// eval('5*7');
// eval('6-1');
// eval('9/2');
// eval('2^8');

