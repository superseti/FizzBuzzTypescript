import { getItem } from './fizzbuzzItem';
describe('fizzbuzzItem', function () {
    describe('with 1', function () {
        it('should return 1', function () {
            const number = 1;
            const result = getItem(number);
    
            const expectedResult = '1';
            expect(result).toBe(expectedResult);
        });
    });
    describe('with 2', function () {
        it('should return 2', function () {
            const number = 2;
            const result = getItem(number);
    
            const expectedResult = '2';
            expect(result).toBe(expectedResult);
        });
    });
    describe('with multiply of 3', function () {
        const multiplyOfThree: number[] = [3, 6, 9, 12, 18, 21, 24];
        it.each(multiplyOfThree)('should return Fizz', function (number: number) {
            const result = getItem(number);
    
            const expectedResult = 'Fizz';
            expect(result).toBe(expectedResult);
        });
    });
    describe('with 4', function () {
        it('should return 4', function () {
            const number = 4;
            const result = getItem(number);
    
            const expectedResult = '4';
            expect(result).toBe(expectedResult);
        });
    });
    describe('with multiply of 5', function () {
        const multiplyOfFive: number[] = [5, 10, 20, 25, 35, 40];
        it.each(multiplyOfFive)('should return Buzz', function (number: number) {
            const result = getItem(number);
    
            const expectedResult = 'Buzz';
            expect(result).toBe(expectedResult);
        });
    });
    describe('with multiply of 3 and 5', function () {
        const multiplyOfThreeFive: number[] = [15, 30, 60];
        it.each(multiplyOfThreeFive)('should return FizzBuzz', function (number: number) {
            const result = getItem(number);
    
            const expectedResult = 'FizzBuzz';
            expect(result).toBe(expectedResult);
        });
    });
});