import localData from "../data/BackendData.json";
import Section from "./sectionCard";
import InputPage from "./InputPage";

/**
 * Author: Addison A
 * Last Updated: 12/26/2025
 * 
 * Editors: 
 */

/**
 * The number of sections in the grid
 */
var SectionCount = 0;

/**
 * Converts time from military time(ex: 13:00) to civilian time(ex: 1:00pm)
 * @param time string
 * @returns string
 */
function militaryToCivilianTime(time: string): string{
  var splitTime = time.split(":");
  var suffix = "am";
  if(parseInt(splitTime[0]) > 12){
    splitTime[0] = (parseInt(splitTime[0]) - 12).toString();
    suffix = "pm";
  }
  return splitTime.join(":") + suffix;
}


/**
 * Increments the SectionCount by 1
 */
function incrementSectionCount(): void{
  SectionCount++;
}

/**
 * Resets the SectionCount to 0
 */
function resetSectionCount(){
  SectionCount = 0;
}

/**
 * Returns the number of unused cells in the grid
 * @returns number
 */
function getEmptySpacesCount(): number{
  return (55) - SectionCount;
}

/**
 * Groups the given sections into a Record by each day's timeBlock
 * @param sections 
 * @returns Record<string, SectionProps[]>
 */
function groupSections(sections: any[]): Record<string, SectionProps[]> {
  const grouped: Record<string, SectionProps[]> = {};
  sections.forEach(section => {
    section.days.forEach((day: string) => { // creates a key for each day's timeBlock present in the section list.
      const key = `${day}-${section.timeBlockId}`;
      if (!grouped[key]){
        grouped[key] = [];
      }
      grouped[key].push(section); // sets the section to a key
    });
  });
  return grouped;
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

export default function Home() {
  const groupedSections = groupSections(localData.sections);
  resetSectionCount();
  return (
    // table to put all the sections in the day
    // Sections to put in each table that require data to display
    <section className="min-h-screen items-center justify-center p-12 bg-zinc-50 font-sans dark:bg-black">
      <InputPage path={"../data/InputTestData.json" } jsonData={JSON.stringify(localData)}></InputPage>

      <div id="schedule" className="grid grid-cols-6 grid-rows-12 grid-flow-dense w-auto border-2 border-solid">
        {/* Headers */}
        <h4 className="flex justify-center items-center col-start-1 col-span-1 bg-stone-300 text-black border-2 border-white">Time</h4>
        <h4 className="flex justify-center items-center col-start-2 col-span-1 bg-stone-300 text-black border-2 border-white">Monday</h4>
        <h4 className="flex justify-center items-center col-start-3 col-span-1 bg-stone-300 text-black border-2 border-white">Tuesday</h4>
        <h4 className="flex justify-center items-center col-start-4 col-span-1 bg-stone-300 text-black border-2 border-white">Wednesday</h4>
        <h4 className="flex justify-center items-center col-start-5 col-span-1 bg-stone-300 text-black border-2 border-white">Thursday</h4>
        <h4 className="flex justify-center items-center col-start-6 col-span-1 bg-stone-300 text-black border-2 border-white">Friday</h4>

        {/* Fill in the time on the left */}
        {localData.timeBlock.map(time => (
          <div key={time.id} className="flex justify-center items-center p-3 col-start-1 col-span-1 bg-stone-300 text-black border-2 border-white">{militaryToCivilianTime(time.start)} - {militaryToCivilianTime(time.end)}</div>
        ))}


        {/* Create & Fill Cells with Sections */}
        {Object.entries(groupedSections).map(([key, sections]) => {
          incrementSectionCount();
          const [day, timeBlockId] = key.split("-");
          return (
            <div
              key={key}
              className="col-span-1 row-span-1 border-2 border-dotted p-2 flex flex-col gap-2 text-center"
              style={{
                gridColumnStart: getStartColumn(day),
                gridColumnEnd: `span 1`,
                gridRowStart: getStartRow(parseInt(timeBlockId)),
                gridRowEnd: `span 1`
              }}
            >
              {sections.map((section, index) => (
                <Section key={index} id={section.id} subject={section.subject} level={section.level} timeBlockId={section.timeBlockId} days={section.days} studentIds={section.studentIds} teacherId={section.teacherId}></Section>
              ))}
            </div>
          );
        })}


        {/* Fill in empty spaces */}
        {Array.from({ length: getEmptySpacesCount() }, (_, index) => (
          <div key={index} className="col-span-1 row-span-1 border-2 border-dotted p-6 text-center"></div>
        ))}
      </div>
      
    </section>
  );
}
