/**
 * Interface for a Section on the schedule
 */
interface SectionProps {
    id: string, 
    subject: string, 
    level: string, 
    timeBlockId: number, 
    days: string[], 
    studentIds: Array<string>, 
    teacherId: string
}