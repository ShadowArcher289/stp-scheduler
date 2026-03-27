import localData from "../../data/BackendData.json";

/**
 * Author: Addison A
 * Last Updated: 12/26/2025
 * 
 * Editors: 
 */

interface SectionCardProps{
    section: SectionProps
    teachers: TeacherProps[]
    students: StudentProps[]
}

/**
 * returns a background color based on the subject of the section
 * @param subject string
 * @returns string "valid css color"
 */
function getBackgroundColor(subject: string){
    switch (subject.toLowerCase()) { //TODO: Powdered colors
        case "math":
            return "#ff4040ff";
        case "english":
            return "#4a86e8ff";
        case "asl":
            return "#80c362ff"
        default:
            console.log("Invalid subject inputted");
            break;
    }
}

/**
 * Given an array of teachers and a teacher's id, returns the name of a specified teacher.
 * @param teachers Array of Teachers
 * @param teacherId Id of the desired teacher
 * @returns string
 */
function getTeacherName(teachers: Array<TeacherProps>, teacherId: string): string{
    const match = teachers.find(teacher => teacher.id === teacherId); // find the matching teacher

    if(match){ // if not unidentified, then return the name
        return match.name;
    }
    else{
        return "";
    }
}

function getStudentName(students: Array<StudentProps>, studentId: string): string{
    const match = students.find(student => student.id === studentId); // find the matching student

    if(match){ // if not unidentified, then return the name
        return match.name;
    }
    else{
        return "";
    }
}

function getSectionLevel(level: number): string{
    switch(level){
        case 0:
            return "Beginner";
        case 1:
            return "Intermediate";  
        case 2:
            return "Advanced";  
        default:
            return "";
    }
}

export default function Section(
    // {
    //     id, 
    //     subject, 
    //     level, 
    //     timeBlockId, 
    //     days, 
    //     studentIds, 
    //     teacherId
    // }: SectionProps, teachers: TeacherProps[]
    {section, teachers, students}: SectionCardProps
){
    return(
        <div 
            className="flex grow col-span-1 row-span-1 p-5 text-sm justify-center items-center rounded-2xl flex-col"
            style={{
                backgroundColor: getBackgroundColor(section.subject),
            }}
        >
            {getTeacherName(teachers as Array<TeacherProps>, section.teacherId)} - {getSectionLevel(section.level)} {section.subject.charAt(0).toUpperCase() + section.subject.slice(1)}
            <br />
            <br />
            {
                section.studentIds.map((id) => (
                    <div key={id}>{getStudentName(students, id)}</div>
                ))
            }
        </div>
    );
}