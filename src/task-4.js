export default function runRover(commandsList) {
    const commands = [...commandsList].sort((a, b) => a.order - b.order);
    const obj = {
        x: 0,
        y: 0
    };
    let currentState = "y";
    let currentSign = 1;
    let oldState = "";

    // turn sorted commandList to array of objects with key - command, value - command value
    const reformatedArr = commands.map(commandObj => {
        const returnedObj = {};
        const [objCommand, objCommandData] = commandObj.command.split(" ");
        if (objCommand === "go" || objCommand === "turn") {
            returnedObj[objCommand] = objCommandData;
        }

        return returnedObj;
    });

    // callback function for map method
    function setPath(firstInstruction, i) {
        if (firstInstruction.turn && i === 0) {
            currentState = currentState === "y" ? currentState = "x" : currentState = "y";
        } else if (firstInstruction.go) {
            obj[currentState] = currentState === "y" ? obj.y += parseInt(firstInstruction.go, 10) * currentSign : obj.x += parseInt(firstInstruction.go, 10) * currentSign;
        } else if (firstInstruction.turn === "left") {
            oldState = currentState;
            currentState = currentState === "x" ? currentState = "y" : currentState = "x";
            currentSign = oldState === "y" ? currentSign = -currentSign : currentSign;
        } else if (firstInstruction.turn === "right") {
            oldState = currentState;
            currentState = currentState === "x" ? currentState = "y" : currentState = "x";
            currentSign = oldState === "x" ? currentSign = -currentSign : currentSign;
        }
        return obj;
    }

    reformatedArr.map(setPath);

    return obj;
}