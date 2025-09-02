import { getRiddles,writeBackRiddles,isValidRiddle } from "../services/riddles.services.js";

export function addRiddle(newRiddle){

    if (!isValidRiddle){return false;}

    const riddles = getRiddles();
    if (riddles.length == 0){return false;}

    riddles.push(newRiddle);
    return writeBackRiddles(riddles)
    
}

export function ChackID(id){

    const riddles = getRiddles();
    let flag = false;

    riddles.find(r => r.id == id);
    
    return flag
}

export function updateName(id,newName){

    const arrRiddls = getRiddles();

    if (arrRiddls.length == 0){return false;};

    const riddle = arrRiddls.find(r => r.id == id);
    if (!riddle) return false;

    riddle.name = newName;

    return writeBackRiddles(arrRiddls);

}


export function updateDescription(id,newDescription){

    const arrRiddls = getRiddles();

    if (arrRiddls.length == 0){return false;};

    const riddle = arrRiddls.find(r => r.id == id);
    if (!riddle) return false;

    riddle.taskDescription = newDescription;

    return writeBackRiddles(arrRiddls);

}


export function updateAnswer(id,newAnswer){

    const arrRiddls = getRiddles();

    if (arrRiddls.length == 0){return false;};

    const riddle = arrRiddls.find(r => r.id == id);
    if (!riddle) return false;

    riddle.correctAnswer = newAnswer;

    return writeBackRiddles(arrRiddls);

}

export function deleteRiddle(id){

    const arrRiddls = getRiddles();

    if (arrRiddls.length == 0){return false;};

    const riddle = arrRiddls.find(r => r.id == id);
    if (!riddle) return false;

    const updatedRiddles = arrRiddls.filter(r => r.id != id);

    return writeBackRiddles(updatedRiddles);

}


//  updateDescription, updateAnswer,

// if (!successfully){return false;};

// import express from 'express';
// import { configRoutes } from "./routes/configRoutes.js"
// import logger from "./middlewares/logger.js"

// const PORT = process.env.PORT || 3005;

// const router = express.Router();
// const app = express();

// app.use(express.json());

// app.use(logger);

// configRoutes(app);

// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });


// const server = http.createServer((req,res) =>{
//     if (req.method === "GET" && req.url === "/riddles") {
//         const riddles = getAllRiddles();

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify(riddles));
//         res.end();
//     }
//     if (req.method === "POST" && req.url === "/riddles/add"){
//         const riddles = addRiddle();
//     }
// })