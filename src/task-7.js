export default function getPolynomial(...coefficients) {
    const trueCoefficients = coefficients.filter(value => value !== 0);

    if (trueCoefficients.length === 0) {
        return "0";
    }

    let n = coefficients.length - 1;

    function setPolinomalArray(value) {
        if (value === 0) {
            value = "";
        } else if (n === 0) {
            value = `${value}`;
        } else if (n === 1 && (value === 1 || value === -1)) {
            value = value === 1 ? "x" : "-x";
        } else if (value === 1 || value === -1) {
            value = value === 1 ? `x^${n}` : `-x^${n}`;
        } else if (n === 1) {
            value = `${value}*x`;
        } else {
            value = `${value}*x^${n}`;
        }

        n--;
        return value;
    }

    return coefficients.map(setPolinomalArray).reduce((sum, value) => {
        if (value[0] === "-") {
            sum += value;
        } else if (value !== "" && sum !== "") {
            sum += `+${value}`;
        } else {
            sum += value;
        }

        return sum;
    });
}