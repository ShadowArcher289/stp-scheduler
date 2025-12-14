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
        <div>
            Hello, I am a section and here are my attributes
            {id} {subject} {level} {timeBlockId} {days} {studentIds} {teacherId}
        </div>
    );
}