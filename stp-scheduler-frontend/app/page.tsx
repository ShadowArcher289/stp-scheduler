import localData from "../data/SchedulerData.json";
import Section from "./sectionCard"

const times = [ // unused
    { id: 0, hour: '08', timeOfDay: "am"},
    { id: 1, hour: '09', timeOfDay: "am"},
    { id: 2, hour: '10', timeOfDay: "am"},
    { id: 3, hour: '11', timeOfDay: "am"},
    { id: 4, hour: '12', timeOfDay: "pm"},
    { id: 5, hour: '01', timeOfDay: "pm"},
    { id: 6, hour: '02', timeOfDay: "pm"},
    { id: 7, hour: '03', timeOfDay: "pm"},
    { id: 8, hour: '04', timeOfDay: "pm"},
    { id: 9, hour: '05', timeOfDay: "pm"},
  ];

  /**
   * The number of sections in the grid.
   */
  var SectionCount = localData.sections.length;

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
   * Returns the number of empty spaces in the grid.
   * @returns number
   */
  function getEmptySpacesCount(): number{
    return 41 - SectionCount;
  }

export default function Home() {
  SectionCount = localData.sections.length;
  return (
    // table to put all the sections in the day
    // Sections to put in each table that require data to display
    <section className="flex min-h-screen items-center justify-center p-12 bg-zinc-50 font-sans dark:bg-black">
      <div id="schedule" className="grid grid-cols-6 grid-rows-12 grid-flow-dense w-auto border-2 border-solid">
        
        {/* Headers */}
        <h4 className="col-start-1 col-span-1 bg-stone-300 text-black border-2 border-white">Time</h4>
        <h4 className="col-start-2 col-span-1 bg-stone-300 text-black border-2 border-white">Monday</h4>
        <h4 className="col-start-3 col-span-1 bg-stone-300 text-black border-2 border-white">Tuesday</h4>
        <h4 className="col-start-4 col-span-1 bg-stone-300 text-black border-2 border-white">Wednesday</h4>
        <h4 className="col-start-5 col-span-1 bg-stone-300 text-black border-2 border-white">Thursday</h4>
        <h4 className="col-start-6 col-span-1 bg-stone-300 text-black border-2 border-white">Friday</h4>

        {/* Fill in the time on the left */}
        {localData.timeBlock.map(time => (
          <div key={time.id} className="p-3 col-start-1 col-span-1 bg-stone-300 text-black border-2 border-white">{militaryToCivilianTime(time.start)} - {militaryToCivilianTime(time.end)}</div>
        ))}

        {/* Fill in sections */}
        {localData.sections.map((section, index) => (
          <Section key={index} id={section.id} subject={section.subject} level={section.level} timeBlockId={section.timeBlockId} days={section.days} studentIds={section.studentIds} teacherId={section.teacherId}></Section>
        ))}

        {Array.from({ length: getEmptySpacesCount() }, (_, index) => (
          <div key={index} className="col-span-1 row-span-1 border-2 border-dotted p-6 text-center"></div>
        ))}
      </div>
      
    </section>
  );
}
