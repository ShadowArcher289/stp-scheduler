"use client"

// import * as fs from 'fs';
import { useState } from 'react';

interface InputPageProps {
    path: string;
    jsonData: string;
}

/**
 * Write to a specified json file 
 * @param filePath the file's path
 * @param newJsonData data for the file
 */
function writeToJson(filePath: string, newJsonData: string){
    console.log(newJsonData);
    // fs.writeFileSync(filePath, newJsonData);
}

/**
 * Page for inputting and modifying data in the .json file TO-DO: Implement this. 
 * @param jsonFile the json to edit. Default: "../data/SchedulerData.json"
 * @returns <div></div>
 */
export default function InputPage({path, jsonData}: InputPageProps){
    const [newData, setNewData] = useState<string>("");
    
    return(
        <div>
            <p>New Data Input:</p>
            <input type='text' id="newData" value={newData} className="border-2 p-2" onChange={(e) => setNewData(e.target.value)}
 placeholder='Input a json file'></input>
            <button className="border-2 p-2" onClick={() => writeToJson(path, newData)}>Submit</button>
        </div>
    );
}