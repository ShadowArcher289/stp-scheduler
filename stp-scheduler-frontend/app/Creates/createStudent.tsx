import { match } from "assert";
import { ChangeEvent, FormEvent, useState } from "react";
import * as API from '.././SendToApi';

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
     * 
     * @param sectionId string, id of the section to add
     */
    function addSection(sectionId: string){
        selectedSections.push(sectionId);
        setSectionIds(selectedSections);
    }

    /**
     *
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
     * @param student_name unused
     * @param subject_rankings unused
     * @param section_ids unused
     */
    function createStudent(e: FormEvent<HTMLFormElement>, student_name: string = "", subject_rankings: Record<string, number> = {}, section_ids: string[] = []){
        e.preventDefault(); // prevents page reload on form submission
        
        student_name = name;
        subject_rankings = {"math:": mathScore, "english": englishScore, "asl": aslScore};
        section_ids = sectionIds;

        console.log("Student Creation Initiated: ");
        console.log("student_name: " + student_name);
        console.log("subject_ranking: " + JSON.stringify(subject_rankings));
        console.log("section_ids: " + section_ids);

        API.createStudent(JSON.stringify({
            "id": API.generateId(), // TODO: Update to autogenerate ids
            "name": student_name,
            "subject_rankings": subject_rankings,
            "sectionIds": section_ids
        }))

        e.currentTarget.reset(); // reset the data
        setName("no_name");
        setSectionIds([]);
        setMathScore(5);
        setEnglishScore(5);
        setAslScore(5);

    }

    return (
        <div className={"border-2 p-2"}>
            CreateStudent
            <form name="createStudentForm" onSubmit={(e) => createStudent(e)}>
                <br />
                <label className={"p-2 pr-4"} >Name:</label>
                <input type="text" id="name" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setName(e.currentTarget.value)}/>
                <br />
                <label className={"p-2 pr-4"} >Math Rank: {mathScore}</label>
                <input type="range" min={minRank} max={maxRank} id="mathRank" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setMathScore(Number(e.currentTarget.value))}/>
                <br />
                <label className={"p-2 pr-4"} >English Rank: {englishScore}</label>
                <input type="range" min={minRank} max={maxRank} id="englishRank" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setEnglishScore(Number(e.currentTarget.value))}/>
                <br />
                <label className={"p-2 pr-4"} >ASL Rank: {aslScore}</label>    
                <input type="range" min={minRank} max={maxRank} id="aslRank" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setAslScore(Number(e.currentTarget.value))}/>
                <br />

                {/* TODO: somehow let the user pick all the sections for this student to be in. Ideally something visual, perhaps getting the sections data in a mini-calendar and letting the user click(select) their desired ones. */}
                <label className={"p-2 pr-4"} >Sections:</label> 
                {/* <input type="text" id="sections" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}/> */}
                
                {/* Generate list of all selectable sections */}
                <div className={"border-2 m-4 pt-4 pb-4"}>
                    {Object.entries(scheduleSections).map(([key, value]) => {

                        // incrementSectionCount();
                        // const [day, timeBlockId] = key.split("-");
                        return (
                            <div key={key} className="mb-2 border-b">
                                <input type="checkbox" id={value} value={value} className={"h-4 w-4 ml-8"} onChange={(e) => updateSections(e, e.currentTarget.value)}/>
                                <label className={"p-2 pr-4 pl-6"} >{value}</label>    
                            </div>
                        );
                    })
                    }
                </div>
                {/* <input type="checkbox" id="sections" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}/> */}

                <br />
                <button type="submit" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}>Submit</button>
            </form>
            
        </div>
    );
}