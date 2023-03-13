const findClosingParenthesis = (string, n) => {
    let num = 0;
    let parenthesisCount = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === '(') parenthesisCount++
        if(parenthesisCount > n && string[i] === ')') parenthesisCount--
        else if(parenthesisCount === n && string[i] === ')') {
            num = i;
            return num;
        }
    }
    if (parenthesisCount === n) return num
    else return -1
}

module.exports = findClosingParenthesis;