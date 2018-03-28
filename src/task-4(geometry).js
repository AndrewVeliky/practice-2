
export default function runRover(commandsList) {
    const commands = [...commandsList].sort((a, b) => a.order - b.order);
    const obj = {
        x: 0,
        y: 0
    };
    let degree = 90;

    const reformatedArr = commands.map(commandObj => {
        const returnedObj = {};
        const [objCommand, objCommandData] = commandObj.command.split(" ");
        if (objCommand === "go" || objCommand === "turn") {
            returnedObj[objCommand] = objCommandData;
        }
        
        return returnedObj;
    });


    function getRadians(deg) {
        return deg * Math.PI / 180;
    }

    function setPath(instruction) {
        if (instruction.go) {
            obj.x += Math.cos(getRadians(degree)).toFixed() * instruction.go;
            obj.y += Math.sin(getRadians(degree)).toFixed() * instruction.go;
        } else if (instruction.turn === "right") {
            degree -= 90;
        } else if (instruction.turn === "left") {
            degree += 90;
        }
        // return { x: obj.x, y: obj.y};
    }

    // let steps = new Set(reformatedArr.map(setPath));
    // return a[a.length - 1];
    
    reformatedArr.map(setPath);

    return obj;
}
