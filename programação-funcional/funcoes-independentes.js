

// recursive
// Find the factorial of a number 

const factorial = x => {
    // if numer is 0
    if(x === 0){
        return 1;
    }
    return x * factorial(x-1)
}

factorial(2)