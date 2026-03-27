"use client"

import { useEffect, useState } from "react";
import * as GetAPI from "../GetFromApi";

export default function TeachersPage(){
    const [teacherData, setTeacherData] = useState<StudentProps[]>([]);

    /**
     * calls the GetAPI to repopulate its data
     */
    useEffect(() => {
        const fetchData = async () => {
            await GetAPI.getFromBackendApi("Teachers");
            setTeacherData(GetAPI.teacher_data);
        };

        fetchData();
    }, [])

    return (
        <div className="text-black content-center">
            <h2 className=" text-end pr-16 mt-8 mb-2 text-lg"><b>{teacherData.length}</b> Total Teachers</h2>
            <ul className="flex flex-wrap w-dvw justify-left list-decimal p-4">
                {teacherData.map((teacher) => (
                    <li key={teacher.id} className="m-6 mt-1 mb-1 pl-1 pr-1 text-sm">
                        <b>id: | name: | subjects:</b> <br />
                        {teacher.id}<br />
                        {teacher.name}<br />
                        {JSON.stringify(teacher.subject_rankings)}<br />
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}