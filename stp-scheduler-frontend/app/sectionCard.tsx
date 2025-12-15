export default function Section(
    id: number, 
    subject: string, 
    level: string, 
    timeBlockId: number, 
    days: string, 
    studentIds: Array<number>, 
    teacherId: number
){
    return(
        <div className="col-span-1 row-span-1 border-2 border-dotted">
            Hello, I am a section and here are my attributes
            {id} {subject} {level} {timeBlockId} {days} {studentIds} {teacherId}
        </div>
    );
}