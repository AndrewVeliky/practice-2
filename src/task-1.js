export default function sum(...values) {
    const sumValues = values.reduce((a, b) => a + b);

    return sumValues;
}