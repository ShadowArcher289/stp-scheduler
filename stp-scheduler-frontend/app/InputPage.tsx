"use client"

// import * as fs from 'fs';
import { useState } from 'react';
import * as XLSX from '@e965/xlsx';
import { write } from 'fs';

/**
 * Author: Addison A
 * Last Updated: 12/26/2025
 * 
 * Editors: 
 */


interface InputPageProps {
    path: string;
}

/**
 * Write to a specified json file 
 * @param filePath the file's path
 * @param newJsonData data for the file
 */
function writeToJson(filePath: string, newJsonData: string){
    console.log("Filepath: " + filePath);
    console.log("newJsonData: " + newJsonData);
    // fs.writeFileSync(filePath, newJsonData);
}

/**
 * Page for inputting and modifying data in the .json file TO-DO: Implement this. 
 * @param jsonFile the json to edit. Default: "../data/SchedulerData.json"
 * @returns <div></div>
 */
export default function InputPage({path}: InputPageProps){
    const [teacherData, setTeacherData] = useState<string>("");
    const [studentData, setStudentData] = useState<string>("");

    /**
     * Handles file upload. Generated from Copilot
     * @param e 
     * @returns null if invalid
     */
    function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>, type: String) {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (evt) => {
            const data = evt.target?.result;
            if (!data) return;

            // Parse the workbook
            const workbook = XLSX.read(data, { type: "binary" });

            // Get the first sheet
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert to JSON
            const json = XLSX.utils.sheet_to_json(sheet);

            // Store JSON as a string so <p> can display it
            if(type.toLowerCase() === "teachers"){
                setTeacherData(JSON.stringify(json, null, 2));
            }
            else{
                setStudentData(JSON.stringify(json, null, 2));
            }
            
        };

        reader.readAsBinaryString(file);

        if(type.toLowerCase() === "teachers"){
            writeToJson(path, teacherData);
        }
        else{
            writeToJson(path, studentData);
        }
    }

    return(
        <div className={"pb-12 mb-4 border-b-2"}>
            
            <br></br>
            <form name="fileInput">
                <br />
                <label className={"p-2 pr-4"} >Submit Teachers:</label>
                <input type="file" id="fileInput" className={"border-2 p-1"} accept=".xlsx" onChange={(e) => handleFileUpload(e, "teachers")}/>
            </form>
            <form name="fileInput">
                <br />
                <label className={"p-2 pr-4"} >Submit Students:</label>
                <input type="file" id="fileInput" className={"border-2 p-1"} accept=".xlsx" onChange={(e) => handleFileUpload(e, "students")}/>
            </form>

            <br></br>

            <p>Teachers: {teacherData}</p>
            <p>Students: {studentData}</p>
        </div>
    );
}