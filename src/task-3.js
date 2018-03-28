export default function boundingRect(coordsList) {
    const coordX = coordsList.map(element => element.x);
    const coordY = coordsList.map(element => element.y);

    if (coordsList.length === 0) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
    }

    return {
        top: Math.max(...coordY),
        right: Math.max(...coordX),
        bottom: Math.min(...coordY),
        left: Math.min(...coordX)
    };

    /* return {
        top: coordY.sort((a, b) => b - a)[0],
        right: coordX.sort((a, b) => b - a)[0],
        bottom: coordY.sort((a, b) => a - b)[0],
        left: coordX.sort((a, b) => a - b)[0]
    }; */
}