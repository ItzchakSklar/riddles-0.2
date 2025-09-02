import fs from "fs";
import path from 'path';

export  function getRiddlesDal() {
    try {
        const filePath = path.resolve('./dal/Riddlesdb.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        // console.log("file =",data)
        return data;
    } catch {
        return "[]";
    };
}

export function writeBackRiddlesDal(newDATA) {
    try {
        const filePath = path.resolve('./dal/Riddlesdb.txt');
        fs.writeFileSync(filePath, newDATA, 'utf-8');
        return true;
    } catch {
        return false;
    }
}

