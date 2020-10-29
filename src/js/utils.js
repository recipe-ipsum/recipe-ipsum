const gcd = function(a, b) {
    if (b < 0.0000001) return a;                // Since there is a limited precision we need to limit the value.

    return gcd(b, Math.floor(a % b));           // Discard any fractions due to limitations in precision.
};

export const decimalToFraction = (decimal) => {
    const len = decimal.toString().length - 2;

    let denominator = Math.pow(8, len);
    let numerator = decimal * denominator;

    const divisor = gcd(numerator, denominator);    // Should be 5

    numerator /= divisor;                         // Should be 687
    denominator /= divisor;                       // Should be 2000

    return Math.floor(numerator) + '/' + Math.floor(denominator);
};

export const capitalizeChars = (initialText) => {
    const text = initialText.split(' ');
    let capitalizedText = [];

    for(let i = 0; i < text.length; i++){
        capitalizedText.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
    }

    return capitalizedText.join(' ');
};

export const poundsToGram = (poundsAmount, fraction) => {
    //454 grams is 1 pound
    if(poundsAmount === 1 && (fraction === 1 || 0) ) {
        return 454;
    }

    if(fraction !== 1) {
        return ((poundsAmount * 454) + (fraction * 454));
    } else {
        return poundsAmount * 454;
    }
};