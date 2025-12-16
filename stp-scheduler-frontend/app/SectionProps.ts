/**
 * Interface for a Section on the schedule
 */
interface SectionProps {
    id: number, 
    subject: string, 
    level: string, 
    timeBlockId: number, 
    days: string[], 
    studentIds: Array<number>, 
    teacherId: number
}