"use client"; 
 
import { useState } from "react";
import Link from "next/link";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex flex-col ${isOpen ? "w-64" : "w-16"} h-screen transition-width duration-300`}>
            <button
                onClick={toggleMenu}
                className="p-2 text-white bg-gray-400 hover:bg-gray-600 focus:outline-none rounded-lg"
            >
                Menu
            </button>
            {isOpen && (
                <div className="flex flex-col gap-4 p-4">
                    <nav className="flex flex-col gap-4 items-start mt-10">
                        <Link href="/" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:bg-blue-400 hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center  hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">
                            <span>
                                Home page
                            </span>
                        </Link>
                        <Link href="/students" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:bg-blue-400 hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center  hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">
                            <span>
                                Students
                            </span>
                        </Link>
                        <Link href="/teachers" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">
                            <span>
                                Teachers
                            </span>
                        </Link>
                        <Link href="/courses" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">
                            <span>
                                Courses
                            </span>
                        </Link>
                        <Link href="/inscriptions" className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:bg-blue-400 hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800">
                            <span>
                                Inscriptions
                            </span>
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
}

export default SideBar;