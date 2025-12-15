import localData from "../data/SchedulerData.json";
import Section from "./sectionCard"

export default function Home() {
  return (
    // table to put all the sections in the day
    // Sections to put in each table that require data to display
    
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div id="schedule" className="grid grid-cols-6 grid-rows-10 grid-flow-dense w-auto border-2 border-dotted">
        
        <h4 className="col-start-1 col-span-1">Time</h4>
        <div className="col-start-1 col-span-1">8:00am</div>
        <div className="col-start-1 col-span-1">9:00am</div>
        <div className="col-start-1 col-span-1">10:00am</div>
        <div className="col-start-1 col-span-1">11:00am</div>
        <div className="col-start-1 col-span-1">12:00am</div>
        <div className="col-start-1 col-span-1">1:00pm</div>
        <div className="col-start-1 col-span-1">2:00pm</div>
        <div className="col-start-1 col-span-1">3:00pm</div>
        <div className="col-start-1 col-span-1">4:00pm</div>
        <div className="col-start-1 col-span-1">5:00pm</div>

        <h4 className="col-start-2 col-span-1">Monday</h4>
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

        <h4 className="col-start-3 col-span-1">Tuesday</h4>
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

        <h4 className="col-start-4 col-span-1">Wednesday</h4>
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

        <h4 className="col-start-5 col-span-1">Thursday</h4>
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

        <h4 className="col-start-6 col-span-1">Friday</h4>
        <div className="col-start-6 col-span-1">8:00am</div>
        <div className="col-start-6 col-span-1">9:00am</div>
        <div className="col-start-6 col-span-1">10:00am</div>
        <div className="col-start-6 col-span-1">11:00am</div>
        <div className="col-start-6 col-span-1">12:00am</div>
        <div className="col-start-6 col-span-1">1:00pm</div>
        <div className="col-start-6 col-span-1">2:00pm</div>
        <div className="col-start-6 col-span-1">3:00pm</div>
        <div className="col-start-6 col-span-1">4:00pm</div>
        <div className="col-start-6 col-span-1">5:00pm</div>
      </div>
      
    </section>
  );
}
