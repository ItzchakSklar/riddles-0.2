import { getRiddlesDal,writeBackRiddlesDal } from "../dal/riddles.dal.js"

export async function getRiddles(){
    const data = await getRiddlesDal();
    const PresedData = await JSON.parse(data);
    // console.log(PresedData);
    return PresedData;
}

export function writeBackRiddles(NewRiddles){
    return writeBackRiddlesDal(NewRiddles.JSON.stringify(arrRiddls, null, 2))
}

export function isValidRiddle(riddle) {
    return (
        riddle.hasOwnProperty('id') &&
        riddle.hasOwnProperty('name') &&
        riddle.hasOwnProperty('taskDescription') &&
        riddle.hasOwnProperty('correctAnswer')
    );
}

