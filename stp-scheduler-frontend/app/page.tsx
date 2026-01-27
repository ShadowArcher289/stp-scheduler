import localData from "../data/BackendData.json";
import Section from "./sectionCard";
import InputPage from "./InputPage";

/**
 * Author: Addison A
 * Last Updated: 1/14/2026
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
 * Returns the number of unused cells in the grid. Calculates cell count using the number of timeBlocks in localData * 5(the number of days)
 * @returns number
 */
function getEmptySpacesCount(): number{
  return (localData.timeBlock.length * 5) - SectionCount;
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


    <section className="min-h-screen items-center justify-center font-sans dark:bg-[var(--main-background-color)]">
      {/* Inputs */}
      <InputPage path={"../data/InputTestData.json"}></InputPage>

      <br></br>
    
      {/*  Schedule */}
      <div className="m-12 mt-0 p-4 rounded-4xl bg-gray-800">
        <div 
          id="schedule" 
          className="grid grid-cols-[10rem_repeat(5,1fr)] grid-flow-dense w-auto border-2 border-solid border-[var(--main-text-color)] bg-[var(--main-background-color)] bg-opacity-50 text-xl rounded-4xl"
          // grid-rows-[4rem_repeat(11,1fr)]
          style={{
            gridTemplateRows: `4rem repeat(${localData.timeBlock.length}, 1fr)`
          }}
        >
          
          {/* Fill in the days on top */}
          <h4 className="flex justify-center items-center col-start-1 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] font-bold border-3 border-t-0 border-l-0 border-solid rounded-tl-4xl">Time</h4>
          <h4 className="flex justify-center items-center col-start-2 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] border-3 border-t-0 border-l-0 border-r-2 border-solid">Monday</h4>
          <h4 className="flex justify-center items-center col-start-3 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] border-3 border-t-0 border-l-0 border-r-2 border-solid">Tuesday</h4>
          <h4 className="flex justify-center items-center col-start-4 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] border-3 border-t-0 border-l-0 border-r-2 border-solid">Wednesday</h4>
          <h4 className="flex justify-center items-center col-start-5 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] border-3 border-t-0 border-l-0 border-r-2 border-solid">Thursday</h4>
          <h4 className="flex justify-center items-center col-start-6 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] border-3 border-t-0 border-l-0 border-r-0 border-solid rounded-tr-4xl">Friday</h4>

          {/* Fill in the time on the left */}
          {localData.timeBlock.map(time => (
            <div key={time.id} className="flex justify-center text-center items-center p-3 col-start-1 col-span-1 bg-[var(--main-background-color)] text-[var(--main-text-color)] border-3 border-b-2 border-t-0 border-l-0 border-solid">{militaryToCivilianTime(time.start)} - {militaryToCivilianTime(time.end)}</div>
          ))}


          {/* Create & Fill Cells with Sections */}
          {Object.entries(groupedSections).map(([key, sections]) => {
            incrementSectionCount();
            const [day, timeBlockId] = key.split("-");
            return (
              <div // TODO: make text size based on the window size so that it is always more legible
                key={key}
                className="col-span-1 row-span-1 border-2 border-t-0 border-l-0 border-solid border-[var(--main-text-color)] p-2 flex flex-col gap-2 text-center"
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
            <div key={index} className="col-span-1 row-span-1 border-2 border-t-0 border-l-0 border-solid border-[var(--main-text-color)] p-6 text-center"></div>
          ))}
        </div>
      </div>

    </section>
  );
}
