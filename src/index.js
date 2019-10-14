module.exports = function zeros(expression) {
    const single = expression.split('!').split('*');

    const singleFactorial = single.reduce((acc, value) => {
        if (value !== '') {
            for (let i = value; i > 1; i--) {
                acc *= i;
            }
        }
        return acc;
    }, 1);


    const factorialStr= singleFactorial.toString();
    return  factorialStr.substr(factorialStr.indexOf('0'), factorialStr.length).length;
}
