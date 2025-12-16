import { time } from "console";
import localData from "../data/SchedulerData.json";

interface SectionProps {
    id: number, 
    subject: string, 
    level: string, 
    timeBlockId: number, 
    days: string[], 
    studentIds: Array<number>, 
    teacherId: number
}

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
 * Returns the column number that corresponds to a given day
 * @param day string (ex: 'M' for Monday, 'W' for Wednesday, 'R' for Thursday)
 * @returns number
 */
function getStartColumn(day: string): number{
    var column = 7; // the default column is, column 7, the buffer

    switch (day) { // set the column based on the given day
        case "M":
            column = 2;
            break;
        case "T":
            column = 3;
            break;
        case "W":
            column = 4;
            break;
        case "R":
            column = 5;
            break;
        case "F":
            column = 6;
            break;
        default:
            console.log("getStartColumn in sectionCard.tsx: failed to calculate column");
            break;
    }
    return column;
}

/**
 * Returns the respective row number for a given timeBlock.
 * @param timeBlockId id of the timeBlock for a given section
 * @returns number
 */
function getStartRow(timeBlockId: number){
    return timeBlockId + 2;
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
        <>
            {days.map((day: string, index) => (
                <div 
                    key={index}
                    className="col-span-1 row-span-1 border-2 border-dotted p-6 text-center"
                    style={{
                        backgroundColor: getBackgroundColor(subject),
                        gridColumnStart: getStartColumn(day),
                        gridColumnEnd: `span 1`,
                        gridRowStart: getStartRow(timeBlockId),
                        gridRowEnd: `span 1`
                    }}
                >
                    {localData.teachers[teacherId].name} - {subject}
                </div>
            ))}
        </>
    );
}