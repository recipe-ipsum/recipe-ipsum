const gcd = function(a, b) {
    if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.

    return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
};

const decimalToFraction = (decimal) => {
    const len = decimal.toString().length - 2;

    let denominator = Math.pow(8, len);
    let numerator = decimal * denominator;

    const divisor = gcd(numerator, denominator);    // Should be 5

    numerator /= divisor;                         // Should be 687
    denominator /= divisor;                       // Should be 2000

    return Math.floor(numerator) + '/' + Math.floor(denominator);
};

export default decimalToFraction;
