import localData from "../data/BackendData.json";

/**
 * Author: Addison A
 * Last Updated: 12/26/2025
 * 
 * Editors: 
 */

/**
 * returns a background color based on the subject of the section
 * @param subject string
 * @returns string "valid css color"
 */
function getBackgroundColor(subject: string){
    switch (subject.toLowerCase()) {
        case "math":
            return "red";
        case "english":
            return "blue";
        case "asl":
            return "green"
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

export default function Section({
    id, 
    subject, 
    level, 
    timeBlockId, 
    days, 
    studentIds, 
    teacherId
}: SectionProps){
    return(
        <div 
            className="flex grow col-span-1 row-span-1 border-2 border-dotted p-6 justify-center items-center"
            style={{
                backgroundColor: getBackgroundColor(subject),
            }}
        >
            {getTeacherName(localData.teachers as Array<TeacherProps>, teacherId)} - {getSectionLevel(level)} {subject.charAt(0).toUpperCase() + subject.slice(1)}
        </div>
    );
}