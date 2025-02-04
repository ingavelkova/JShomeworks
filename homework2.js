//Exponentiation function

function pow(x,y) {
    let result = 1;

    while (y) {
        result = x * result;
        y--;
    };

    return result;
};

console.log('Result of exponentiation: ', pow(2,3));