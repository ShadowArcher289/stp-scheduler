import { match } from "assert";
import { useState } from "react";

export default function CreateStudent(){
    const [name, setName] = useState<string>("bob");
    const [mathScore, setMathScore] = useState<number>(0);
    const [englishScore, setEnglishScore] = useState<number>(0);
    const [aslScore, setAslScore] = useState<number>(0);

    const [subjectRankings, setSubjectRankings] = useState<Record<string, number>>({"math": 4, "english": 5, "asl": 7});
    const [sectionIds, setSectionIds] = useState<string[]>(["a2fa8d88-5b1a-4bad-976f-d07d4238ffb2", "1fdef444-4c18-492a-8972-eab4f6dc6b5a", "cc8711d1-b0fa-42c2-9c3d-8b3903c55d86"]);

    var minRank = "0";
    var maxRank = "10";

    function createStudent(student_name: string = "", subject_rankings: Record<string, number> = {}, section_ids: string[] = []){
        student_name = name;
        subject_rankings = {"math:": mathScore, "english": englishScore, "asl": aslScore};
        section_ids = sectionIds;


    }

/**
 * 
        {
            "id": "1aeefe9d-4908-4ed5-bd63-0041a6b8cb53",
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
        },
 */
    return (
        <div className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}>
            CreateStudent
            <form name="createStudentForm" onSubmit={() => createStudent}>
                <br />
                <label className={"p-2 pr-4"} >Name:</label>
                <input type="text" id="name" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setName(e.currentTarget.value)}/>
                <br />
                <label className={"p-2 pr-4"} >Math Rank:</label>
                <input type="range" min={minRank} max={maxRank} id="mathRank" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setMathScore(Number(e.currentTarget.value))}/>
                <br />
                <label className={"p-2 pr-4"} >English Rank:</label>
                <input type="range" min={minRank} max={maxRank} id="englishRank" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setEnglishScore(Number(e.currentTarget.value))}/>
                <br />
                <label className={"p-2 pr-4"} >ASL Rank:</label>    
                <input type="range" min={minRank} max={maxRank} id="aslRank" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"} onChange={(e) => setAslScore(Number(e.currentTarget.value))}/>
                <br />
                {/* TODO: somehow let the user pick all the sections for this student to be in. Ideally something visual, perhaps getting the sections data in a mini-calendar and letting the user click(select) their desired ones. */}
                <label className={"p-2 pr-4"} >Sections:</label> 
                <input type="text" id="sections" className={"border-2 p-1 hover:backdrop-brightness-125 active:backdrop-brightness-90"}/>
                <br />
            </form>

            
            <button type="submit" form="createStudentForm" value="Submit">Submit</button>
        </div>
    );
}