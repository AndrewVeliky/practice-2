import runRover from "./task-4.js";
import boundingRect from "./task-3.js";

const run = runRover,
    rect = boundingRect;

function getExpeditionsTargets(commandSeries) {

    return commandSeries.map(command => run(command));
}

export default function boundingRover(commandSeries) {

    const targets = getExpeditionsTargets(commandSeries);

    return rect(targets);
}