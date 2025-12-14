import localData from "../data/SchedulerData.json";
import Section from "./sectionCard"

export default function Home() {
  return (
    // table to put all the sections in the day
    // Sections to put in each table that require data to display
    //
    
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div id="schedule" className="grid grid-cols-2">
        <table className="col-start-1 col-span-1">
          <tbody>
            <tr><th>Time</th></tr>
            <tr><td>8:00am</td></tr>
            <tr><td>9:00am</td></tr>
            <tr><td>10:00am</td></tr>
            <tr><td>11:00am</td></tr>
            <tr><td>12:00am</td></tr>
            <tr><td>1:00pm</td></tr>
            <tr><td>2:00pm</td></tr>
            <tr><td>3:00pm</td></tr>
            <tr><td>4:00pm</td></tr>
            <tr><td>5:00pm</td></tr>
          </tbody>
        </table>
        <table className="col-start-2 col-span-full">
          <tbody>
            <tr id="r1">
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </tbody>
        </table>
      </div>
      
    </section>
  );
}
