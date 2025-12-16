import localData from "../data/SchedulerData.json";

/**
 * Author: Addison A
 * Modified By: 
 * Last Updated: 12/15/2025
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
            className="col-span-1 row-span-1 border-2 border-dotted p-6 text-center"
            style={{
                backgroundColor: getBackgroundColor(subject),
            }}
        >
            {localData.teachers[teacherId].name} - {subject}
        </div>
    );
}