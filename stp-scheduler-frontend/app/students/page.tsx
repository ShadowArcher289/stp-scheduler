"use client"

import { useEffect, useState } from "react";
import * as GetAPI from "../GetFromApi";

export default function StudentsPage(){
    const [studentData, setStudentData] = useState<StudentProps[]>([]);

    /**
     * calls the GetAPI to repopulate its data
     */
    useEffect(() => {
        const fetchData = async () => {
            await GetAPI.getFromBackendApi("Students");
            setStudentData(GetAPI.student_data);
        };

        fetchData();
    }, [])

    return (
        <div className="text-black content-center">
            <h2 className=" text-end pr-16 mt-8 mb-2 text-lg"><b>{studentData.length}</b> Total Students</h2>
            <ul className="flex flex-wrap w-dvw justify-left list-decimal p-4 pl-16">
                {studentData.map((student) => (
                    <li key={student.id} className="m-6 mt-1 mb-1 pl-1 pr-1 text-sm">
                        <b>id: | name: | subjects:</b> <br />
                        {student.id}<br />
                        {student.name}<br />
                        {JSON.stringify(student.subject_rankings)}<br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}