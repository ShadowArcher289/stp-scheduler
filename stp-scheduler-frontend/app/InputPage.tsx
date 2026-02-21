"use client"

import { useState } from 'react';
import * as XLSX from '@e965/xlsx';
import * as API from './SendToApi';

/**
 * Author: Addison A
 * Last Updated: 2/20/2026
 * 
 * Editors: 
 */

export var teacher_data: any = [];
export var student_data: any = [];
export var section_data: any = [];


interface InputPageProps {
    path: string;
}

/**
 * Write to a specified json file 
 * @param filePath the file's path
 * @param newJsonData data for the file
 */
function writeToJson(filePath: string, newJsonData: string){
    console.log("Writing data:")
    console.log("Filepath: " + filePath);
    console.log("newJsonData: " + newJsonData);

    // TODO: Set data to the .json files or update backend data
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

    /**
     * Runs fetch a request to retrieve specified data from the backend and calls to set the .json file to it
     */
    async function getFromBackendApi(type: string){
        try {
            const response = await fetch('http://localhost:8000/' + type.toLowerCase());

            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`); 
            }

            const result = await response.json();
            console.log(result);
            writeToJson("..\\data\\actualData\\" + type + ".json", result);

            switch (type) {
                case "Teachers":
                    teacher_data = result;
                    // console.log("Teacher data:\n" + teacher_data.toString())
                    break;
                
                case "Students":
                    student_data = result;
                    // console.log("Student data:\n" + student_data.toString())
                    break;
                case "Sections":
                    section_data = result;
                    section_data.forEach((element: { days: string[]; }) => { // REMOVE LATER: the backend does not set days, these lines should be removed once it does.
                        element.days = ["M", "T", "W", "R", "F"]; 
                    });
                    // console.log("Sections data:\n" + section_data.toString())
                    break;
            
                default:
                    break;
            }


        } catch (err) {
            console.log("ERROR: The backend did not retrieve data: " + err);
        }
    }

    getFromBackendApi("Teachers");
    getFromBackendApi("Students");
    getFromBackendApi("Sections");

    // Contains functions for retrieving data 
    return(
        <div className={"p-4 pl-16 mt-10 mb-4 border-b-2 bg-[#f76902] text-white"}>
            {/* <button onClick={() => getFromBackendApi("Teachers")} className={"border-2 active:backdrop-brightness-90"}>Get Teachers data (Make sure backend is running)</button>
            <button onClick={() => getFromBackendApi("Students")} className={"border-2 active:backdrop-brightness-90"}>Get Students data</button>
            <button onClick={() => getFromBackendApi("Sections")} className={"border-2 active:backdrop-brightness-90"}>Get Sections data</button> */}

            <button onClick={() => API.createStudent(JSON.stringify({
            "id": "2948ru3h-4908-4ed5-bd63-0041a6b8cb53",
            "name": "Jackie Abbott",
            "subject_rankings": {
            "math": 4,
            "english": 5,
            "asl": 7
            },
            "sectionIds": [
            "a2fa8d88-5b1a-4bad-976f-d07d4238ffb2",
            "1fdef444-4c18-492a-8972-eab4f6dc6b5a",
            "cc8711d1-b0fa-42c2-9c3d-8b3903c55d86"
            ]
        }))} className={"border-2 active:backdrop-brightness-90"}>Set new Student data</button>

            {/* <button onClick={() => getFromBackendApi("Timeblocks")} className={"border-2 active:backdrop-brightness-90"}>Get Timeblocks data</button> */}
            
            {/* User can input csv files*/}
            <form name="fileInput">
                <br />
                <label className={"p-2 pr-4"} >Submit Teachers:</label>
                <input type="file" id="fileInput" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} accept=".xlsx" onChange={(e) => handleFileUpload(e, "teachers")}/>
            </form>
            <form name="fileInput">
                <br />
                <label className={"p-2 pr-4"} >Submit Students:</label>
                <input type="file" id="fileInput" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} accept=".xlsx" onChange={(e) => handleFileUpload(e, "students")}/>
            </form>

            <br></br>

            <p>{teacherData}</p>
            <p>{studentData}</p>
        </div>
    );
}