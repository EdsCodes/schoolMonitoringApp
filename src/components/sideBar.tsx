"use client"; 
 
import { useState } from "react";

function SideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col ${isOpen ? "w-64" : "w-16"} bg-black-90 h-screen transition-width duration-300`}>
            <button
                onClick={toggleMenu}
                className="p-2 text-white bg-gray-700 hover:bg-gray-600 focus:outline-none"
            >
                Menu
            </button>
            {isOpen && (
                <div className="flex flex-col gap-4 p-4">
                    <nav className="flex flex-col gap-4 items-start mt-10">
                        <a href="#" className="text-lg mt-10">Students</a>
                        <a href="#" className="text-lg mt-10">Teachers</a>
                        <a href="#" className="text-lg mt-10">Courses</a>
                        <a href="#" className="text-lg mt-10">Inscriptions</a>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default SideBar;