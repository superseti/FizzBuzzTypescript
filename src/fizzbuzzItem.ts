export const getItem = (number: number): string => {
    let result = '';
    if (isMultiplyOf(number, 3)) {
        result += "Fizz";
    }
    if (isMultiplyOf(number, 5)) {
        result += "Buzz";
    }
    if (result) { 
        return result;
    }
    return number.toString();
};

const isMultiplyOf = (number: number, base: number) => number % base === 0;