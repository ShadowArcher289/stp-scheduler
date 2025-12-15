import localData from "../data/SchedulerData.json";
import Section from "./sectionCard"

const times = [
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
  ]

export default function Home() {
  return (
    // table to put all the sections in the day
    // Sections to put in each table that require data to display
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div id="schedule" className="grid grid-cols-[1fr,2fr,2fr,2fr,2fr,2fr] grid-rows-10 grid-flow-dense w-auto border-2 border-dotted">
        
        <h4 className="col-start-1 col-span-1 bg-stone-300 text-black border-2 border-white">Time</h4>
        <h4 className="col-start-2 col-span-1 bg-stone-300 text-black border-2 border-white">Monday</h4>
        <h4 className="col-start-3 col-span-1 bg-stone-300 text-black border-2 border-white">Tuesday</h4>
        <h4 className="col-start-4 col-span-1 bg-stone-300 text-black border-2 border-white">Wednesday</h4>
        <h4 className="col-start-5 col-span-1 bg-stone-300 text-black border-2 border-white">Thursday</h4>
        <h4 className="col-start-6 col-span-1 bg-stone-300 text-black border-2 border-white">Friday</h4>

        {times.map(time => (
          <div key={time.id} className="p-3 col-start-1 col-span-1 bg-stone-300 text-black border-2 border-white">{time.hour}:00{time.timeOfDay}</div>
        ))}
        {/* <div className="col-start-1 col-span-1">8:00am</div>
        <div className="col-start-1 col-span-1">9:00am</div>
        <div className="col-start-1 col-span-1">10:00am</div>
        <div className="col-start-1 col-span-1">11:00am</div>
        <div className="col-start-1 col-span-1">12:00am</div>
        <div className="col-start-1 col-span-1">1:00pm</div>
        <div className="col-start-1 col-span-1">2:00pm</div>
        <div className="col-start-1 col-span-1">3:00pm</div>
        <div className="col-start-1 col-span-1">4:00pm</div>
        <div className="col-start-1 col-span-1">5:00pm</div> */}

        {localData.sections.map((section, index) => (
          <Section key={index} id={section.id} subject={section.subject} level={section.level} timeBlockId={section.timeBlockId} days={section.days} studentIds={section.studentIds} teacherId={section.teacherId}></Section>
        ))}

        {/* 
        <div className="col-start-2 col-span-1">8:00am</div>
        <div className="col-start-2 col-span-1">9:00am</div>
        <div className="col-start-2 col-span-1">10:00am</div>
        <div className="col-start-2 col-span-1">11:00am</div>
        <div className="col-start-2 col-span-1">12:00am</div>
        <div className="col-start-2 col-span-1">1:00pm</div>
        <div className="col-start-2 col-span-1">2:00pm</div>
        <div className="col-start-2 col-span-1">3:00pm</div>
        <div className="col-start-2 col-span-1">4:00pm</div>
        <div className="col-start-2 col-span-1">5:00pm</div>

        <div className="col-start-3 col-span-1">8:00am</div>
        <div className="col-start-3 col-span-1">9:00am</div>
        <div className="col-start-3 col-span-1">10:00am</div>
        <div className="col-start-3 col-span-1">11:00am</div>
        <div className="col-start-3 col-span-1">12:00am</div>
        <div className="col-start-3 col-span-1">1:00pm</div>
        <div className="col-start-3 col-span-1">2:00pm</div>
        <div className="col-start-3 col-span-1">3:00pm</div>
        <div className="col-start-3 col-span-1">4:00pm</div>
        <div className="col-start-3 col-span-1">5:00pm</div>

        <div className="col-start-4 col-span-1">8:00am</div>
        <div className="col-start-4 col-span-1">9:00am</div>
        <div className="col-start-4 col-span-1">10:00am</div>
        <div className="col-start-4 col-span-1">11:00am</div>
        <div className="col-start-4 col-span-1">12:00am</div>
        <div className="col-start-4 col-span-1">1:00pm</div>
        <div className="col-start-4 col-span-1">2:00pm</div>
        <div className="col-start-4 col-span-1">3:00pm</div>
        <div className="col-start-4 col-span-1">4:00pm</div>
        <div className="col-start-4 col-span-1">5:00pm</div>

        <div className="col-start-5 col-span-1">8:00am</div>
        <div className="col-start-5 col-span-1">9:00am</div>
        <div className="col-start-5 col-span-1">10:00am</div>
        <div className="col-start-5 col-span-1">11:00am</div>
        <div className="col-start-5 col-span-1">12:00am</div>
        <div className="col-start-5 col-span-1">1:00pm</div>
        <div className="col-start-5 col-span-1">2:00pm</div>
        <div className="col-start-5 col-span-1">3:00pm</div>
        <div className="col-start-5 col-span-1">4:00pm</div>
        <div className="col-start-5 col-span-1">5:00pm</div>

        <div className="col-start-6 col-span-1">8:00am</div>
        <div className="col-start-6 col-span-1">9:00am</div>
        <div className="col-start-6 col-span-1">10:00am</div>
        <div className="col-start-6 col-span-1">11:00am</div>
        <div className="col-start-6 col-span-1">12:00am</div>
        <div className="col-start-6 col-span-1">1:00pm</div>
        <div className="col-start-6 col-span-1">2:00pm</div>
        <div className="col-start-6 col-span-1">3:00pm</div>
        <div className="col-start-6 col-span-1">4:00pm</div>
        <div className="col-start-6 col-span-1">5:00pm</div> */}
      </div>
      
    </section>
  );
}
