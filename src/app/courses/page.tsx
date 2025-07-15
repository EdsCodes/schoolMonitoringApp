"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { courseList, deleteCourse } from "@/modules/coursesModule";
import { teacherList } from "@/modules/teachersModule";
import { Course } from "@/modules/coursesModule";
import CourseForm from "../courses/courseForm";
import toast from "react-hot-toast";

const CoursesPage: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleAddClick = () => {
    setEditingCourse(null);
    setIsModalOpen(true);
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this course?")) {
      const success = deleteCourse(id);
      if (success) {
        toast.success("Course deleted!");
        forceUpdate();
      } else {
        toast.error("Course not found.");
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingCourse(null);
    forceUpdate();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Courses List
        </h1>

        {/* Table Container */}
        <section className="w-full bg-white shadow-xl rounded-lg p-4">
          {/* Scrollable Table */}
          <div className="max-h-[500px] overflow-y-auto">
            <table className="table-auto w-full border-collapse text-sm">
              <thead className="text-gray-700 bg-gray-200">
                <tr>
                  <th className="px-3 py-2 text-left">ID</th>
                  <th className="px-3 py-2 text-left">Course Name</th>
                  <th className="px-3 py-2 text-left"># Students</th>
                  <th className="px-3 py-2 text-left">Start Date</th>
                  <th className="px-3 py-2 text-left">End Date</th>
                  <th className="px-3 py-2 text-left">Teacher</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courseList.map((course, idx) => {
                  const teacher = teacherList.find((t) => t.id === course.teacherId);
                  return (
                    <tr
                      key={course.id}
                      className={`${
                        idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } text-black hover:bg-gray-100 transition duration-150 cursor-pointer`}
                      onClick={() => router.push(`/courses/${course.id}`)}
                    >
                      <td className="px-3 py-2 break-words whitespace-normal">{course.id}</td>
                      <td className="px-3 py-2 break-words whitespace-normal">{course.name}</td>
                      <td className="px-3 py-2">{course.enrolledStudents.length}</td>
                      <td className="px-3 py-2">{course.startDate}</td>
                      <td className="px-3 py-2">{course.endDate}</td>
                      <td className="px-3 py-2 break-words whitespace-normal">
                        {teacher?.name || "N/A"}
                      </td>
                      <td
                        className="px-3 py-2 flex gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={() => handleEdit(course)}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(course.id)}
                          className="text-red-600 hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Add New Course */}
          <div className="mt-6 text-center">
            <button
              onClick={handleAddClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Add New Course
            </button>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <CourseForm onClose={handleModalClose} courseToEdit={editingCourse ?? undefined} />
          </div>
        )}
      </main>
    </div>
  );
};

export default CoursesPage;