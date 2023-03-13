const findClosingParenthesis = require('./findClosingParenthesis.js');

describe('findClosingParenthesis', () => {
    test('should take a string and an optional number and return an integer', () => {
        expect(typeof findClosingParenthesis('', 0)).toBe('number')
    });
    test('should return -1 when invoked with no parenthesis or no starting number', () => {
        expect(findClosingParenthesis('', 1)).toBe(-1)
        expect(findClosingParenthesis('hello')).toBe(-1)
    });
    test('should be able to find the closing parenthesis when only given one set of parenthesis', () => {
        expect(findClosingParenthesis('(hi)', 1)).toBe(3)
    });
    test('should be able to return the closing parenthesis of the second parameter when given multiple parenthesis', () => {
        expect(findClosingParenthesis('(hi), (niamh)', 2)).toBe(12)
    });
    test('should be able to differentiate between parenthesis when they encapsulate each other', () => {
        const input = 'Hello, (world, (foo) bar (something) else), foo (bar) cat'
        expect(findClosingParenthesis(input, 3)).toBe(35)
    });
    test('should be able to differentiate between parenthesis when there are multiple encapsulations', () => {
        const input = 'Hello, (world, (foo) bar (something) else), foo (bar) cat';
        expect(findClosingParenthesis(input, 1)).toBe(41);
    });
});