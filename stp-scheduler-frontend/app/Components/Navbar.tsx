import NavItem, { NavItemProps } from "./Navitem";


const navItems: NavItemProps[] = [
    {
        title: "Home",
        route: "/",
    },
    {
        title: "Management",
        route: "/management",
    },
    {
        title: "Students",
        route: "/students",
    },
    {
        title: "Teachers",
        route: "/teachers",
    },
    {
        title: "Sections",
        route: "/sections",
    }
];

export default function Navbar(){

    return (
        <div className={"flex justify-end p-4 pt-10 pb-10 pl-16 mb-4 border-b-2 bg-[#f76902] text-white pr-16"}>
                <div className="hidden md:visible md:inline-flex p-2 pl-4 pr-4 border-2 rounded">
                    <ul className="inline-flex flex-row flex-nowrap justify-between text-center text-lg">
                        {navItems.map((navItem, index) => (
                            <li className="flex flex-row justify-center items-center" key={index}>
                                | {<NavItem key={index} {...navItem} />}
                            </li>
                        ))}
                        <li className="flex flex-row justify-center items-center">|</li>
                    </ul>
                </div>
        </div>
    );
}