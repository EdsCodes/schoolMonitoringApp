"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { courseList } from "@/modules/coursesModule";
import { teacherList } from "@/modules/teachersModule";

function CoursesPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Courses List
        </h1>

        <div className="w-full bg-white shadow-xl rounded-lg overflow-x-auto p-4">
          <table className="table-auto min-w-max w-full border-collapse">
            <thead className="text-lg text-gray-700 bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Course Name</th>
                <th className="px-4 py-2 text-left"># Students</th>
                <th className="px-4 py-2 text-left">Start Date</th>
                <th className="px-4 py-2 text-left">End Date</th>
                <th className="px-4 py-2 text-left">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {courseList.map((course, idx) => {
                const teacher = teacherList.find((t) => t.id === course.id);

                return (
                  <tr
                    key={course.id}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } text-black hover:bg-gray-100 cursor-pointer transition duration-150`}
                    onClick={() => router.push(`/courses/${course.id}`)}
                  >
                    <td className="px-4 py-3">{course.id}</td>
                    <td className="px-4 py-3">{course.name}</td>
                    <td className="px-4 py-3">{course.enrolledStudents?.length || 0}</td>
                    <td className="px-4 py-3">{course.startDate}</td>
                    <td className="px-4 py-3">{course.endDate}</td>
                    <td className="px-4 py-3">{teacher?.name || "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-6 text-center">
            <Link href="/courseForm">
              <p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded cursor-pointer">
                Add New Course
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CoursesPage;