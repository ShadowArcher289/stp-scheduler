"use client"

import { useEffect, useState } from "react";
import * as GetAPI from "../GetFromApi";

export default function SectionsPage(){
    const [studentData, setStudentData] = useState<StudentProps[]>([]);
    const [teacherData, setTeacherData] = useState<TeacherProps[]>([]);
    const [sectionData, setSectionData] = useState<SectionProps[]>([]);

    /**
     * calls the GetAPI to repopulate its data
     */
    useEffect(() => {
        const fetchData = async () => {
            await GetAPI.getFromBackendApi("Sections");
            setSectionData(GetAPI.section_data);
            await GetAPI.getFromBackendApi("Students");
            setStudentData(GetAPI.student_data);
            await GetAPI.getFromBackendApi("Teachers");
            setTeacherData(GetAPI.teacher_data);
        };

        fetchData();
    }, [])

    return (
        <div className="text-black content-center">
            <h2 className=" text-end pr-16 mt-8 mb-2 text-lg"><b>{sectionData.length}</b> Total Sections</h2>
            <ul className="flex flex-wrap w-dvw justify-left list-decimal p-4 pl-16">
                {sectionData.map((section) => (
                    <li key={section.id} className="m-6 mt-1 mb-1 pl-1 pr-1 text-sm">
                        <b>id: | subject: | level: | days:</b> <br />
                        {section.id}<br />
                        {section.subject}<br />
                        {section.level}<br />
                        {section.days}<br />
                        {/* {section.teacherId}<br /> // | teacher name: | student names:
                        {section.studentIds}<br /> */}
                        <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}