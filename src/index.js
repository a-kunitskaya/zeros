module.exports = function zeros(expression) {
    const multipliers = expression.split("*");

    let twoDivisibleCount = 0;
    let fiveDivisibleCount = 0;
    multipliers.forEach(mul => {
        let step = mul.includes("!!") ? 2 : 1;
        let value = mul.match(/([\d]+)/g)[0];

        while (value >= 2) {
            let div = 5;
            //count values divisible by 5
            while (div <= value) {
                if (value % div === 0) fiveDivisibleCount += 1;
                div *= 5;
            }
            //count values divisible by 2
            if (value % 2 === 0) twoDivisibleCount += 1;
            value -= step;
        }
    });
    return twoDivisibleCount > fiveDivisibleCount ? fiveDivisibleCount : twoDivisibleCount;
};
