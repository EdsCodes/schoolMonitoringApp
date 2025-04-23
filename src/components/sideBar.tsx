"use client"; 
 
import { useState } from "react";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col ${isOpen ? "w-64" : "w-16"} bg-black-90 h-screen transition-width duration-300`}>
            <button
                onClick={toggleMenu}
                className="p-2 text-white bg-gray-400 hover:bg-gray-600 focus:outline-none rounded-lg"
            >
                Menu
            </button>
            {isOpen && (
                <div className="flex flex-col gap-4 p-4">
                    <nav className="flex flex-col gap-4 items-start mt-10">
                        <a href="#" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">Students</a>
                        <a href="#" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">Teachers</a>
                        <a href="#" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">Courses</a>
                        <a href="#" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">Inscriptions</a>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default SideBar;