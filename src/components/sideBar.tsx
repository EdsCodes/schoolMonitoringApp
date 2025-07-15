"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Cierra el sidebar si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={sidebarRef}
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-16"
      } h-screen transition-width duration-300`}
    >
      <button
        onClick={toggleMenu}
        className="p-2 text-white bg-gray-400 hover:bg-gray-600 focus:outline-none rounded-lg"
      >
        Menu
      </button>

      {isOpen && (
        <div className="flex flex-col gap-4 p-4">
          <nav className="flex flex-col gap-4 items-start mt-10">
            {[
              { href: "/", label: "Home page" },
              { href: "/students", label: "Students" },
              { href: "/teachers", label: "Teachers" },
              { href: "/courses", label: "Courses" },
              { href: "/inscriptions", label: "Inscriptions" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg mt-10 bg-gray-50 text-black font-bold py-2 px-4 rounded shadow-md hover:bg-blue-400 hover:shadow-lg active:scale-95 transition rounded-lg min-w-full text-center hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-800"
              >
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default SideBar;
