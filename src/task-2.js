export default function createCounter(n) {
    let currentCount = -n;

    return function() {
        currentCount += n;
        return currentCount;
    };
}