import { ChangeEvent, FormEvent, useState } from "react";
import * as API from '../SendToApi';

interface CreateStudentProps{
    scheduleSections: string[];
}

/**
 * The sections selected by the user
 */
var selectedSections: string[] = [];
var minRank = "0";
var maxRank = "10";

export default function CreateStudent({scheduleSections}: CreateStudentProps){
    const [name, setName] = useState<string>("no_name");
    const [mathScore, setMathScore] = useState<number>(5);
    const [englishScore, setEnglishScore] = useState<number>(5);
    const [aslScore, setAslScore] = useState<number>(5);

    const [subjectRankings, setSubjectRankings] = useState<Record<string, number>>({"math": 5, "english": 5, "asl": 5});
    const [sectionIds, setSectionIds] = useState<string[]>([]);



    /**
     * Calls the helper functions that updates the section lists.
     * @param e ChangeEvent<HTMLInputElement>, check event
     * @param value string, the section id
     */
    function updateSections(e: ChangeEvent<HTMLInputElement>, value: string): void {
        if(e.target.checked){
            addSection(value);
        }
        else{
            removeSection(value);
        }
        console.log(selectedSections);
    }
    /**
     * Adds a section from the user's selection
     * @param sectionId string, id of the section to add
     */
    function addSection(sectionId: string){
        selectedSections.push(sectionId);
        setSectionIds(selectedSections);
    }

    /**
     * Removes a section from the user's selection
     * @param sectionId string, id of the section to remove
     */
    function removeSection(sectionId: string){
        try {
            if(selectedSections.includes(sectionId)){
                selectedSections.splice(selectedSections.indexOf(sectionId), 1);
                setSectionIds(selectedSections);
            }
        } catch (err) {
            console.error("Error: " + err);
        }
    }

    /**
     * Create a student
     * 
     * @param e FormEvent<HTMLFormElement>
     * @param student_name unused
     * @param subject_rankings unused
     * @param section_ids unused
     */
    function createStudent(e: FormEvent<HTMLFormElement>, student_name: string = "", subject_rankings: Record<string, number> = {}, section_ids: string[] = []){
        e.preventDefault(); // prevents page reload on form submission
        
        student_name = name;
        subject_rankings = {
            "math": mathScore, 
            "english": englishScore, 
            "asl": aslScore};
        section_ids = sectionIds;

        console.log("Student Creation Initiated: ");
        console.log("student_name: " + student_name);
        console.log("subject_abilities: " + JSON.stringify(subject_rankings));
        console.log("section_ids: " + section_ids);

        API.createStudent({
            "name": student_name,
            "subject_abilities": subject_rankings,
            "section_ids": section_ids
        })

        e.currentTarget.reset(); // reset the data
        setName("no_name");
        setSectionIds([]);
        setMathScore(5);
        setEnglishScore(5);
        setAslScore(5);
    }

    return (
        <details className="mb-4">
            <summary className="hover:backdrop-brightness-125 p-4"> Create Student (Click to collapse/expand)</summary>
            <div className={"border-2 p-4 m-4 ml-0 border-white/50"}>
                <form name="createStudentForm" onSubmit={(e) => createStudent(e)}>
                    <input type="text" id="name" className={"ml-4 border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setName(e.currentTarget.value)}/>
                    <label className={"p-2 pr-4"} >Student Name</label>
                    <br />
                    <input type="range" min={minRank} max={maxRank} id="mathRank" className={"border-2 p-1 ml-4"} onChange={(e) => setMathScore(Number(e.currentTarget.value))}/>
                    <label className={"p-2 pr-4"} >{mathScore} : Math Ability Level</label>
                    <br />
                    <input type="range" min={minRank} max={maxRank} id="englishRank" className={"border-2 p-1 ml-4"} onChange={(e) => setEnglishScore(Number(e.currentTarget.value))}/>
                    <label className={"p-2 pr-4"} >{englishScore} : English Ability Level</label>
                    <br />
                    <input type="range" min={minRank} max={maxRank} id="aslRank" className={"border-2 p-1 ml-4"} onChange={(e) => setAslScore(Number(e.currentTarget.value))}/>
                    <label className={"p-2 pr-4 "} >{aslScore} : ASL Ability Level</label>    
                    <br />

                    <label className={"p-2 pr-4"} >Sections:</label> 
                    {/* <input type="text" id="sections" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}/> */}
                    
                    {/* Generate list of all selectable sections */}
                    <div className={"border-2 m-4 pt-4 pb-4 border-white/50"}>
                        {Object.entries(scheduleSections).map(([key, value]) => {

                            // incrementSectionCount();
                            // const [day, timeBlockId] = key.split("-");
                            return (
                                <div key={key} className="mb-2 border-b border-white/50">
                                    <input type="checkbox" id={value} value={value} className={"h-4 w-4 ml-8"} onChange={(e) => updateSections(e, e.currentTarget.value)}/>
                                    <label className={"p-2 pr-4 pl-6"} >{value}</label>    
                                </div>
                            );
                        })
                        }
                    </div>
                    {/* <input type="checkbox" id="sections" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}/> */}

                    <button type="submit" className={"border-2 p-1 ml-4 w-35 hover:backdrop-brightness-125 active:backdrop-brightness-90"}>Submit</button>
                </form>
            </div>
        </details>
    );
}