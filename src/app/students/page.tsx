"use client";

import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  studentList,
  deleteStudent,
  Student,
} from "@/modules/studentsModule";
import StudentForm from "../students/studentForm";
import toast from "react-hot-toast";

const StudentsPage: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleAddClick = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this student?")) {
      const success = deleteStudent(id);
      if (success) {
        toast.success("Student deleted!");
        forceUpdate();
      } else {
        toast.error("Student not found.");
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingStudent(null);
    forceUpdate();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Students List
        </h1>

        {/* Table Container */}
        <section className="w-full bg-white shadow-xl rounded-lg p-4">
          {/* Scrollable Table */}
          <div className="max-h-[500px] overflow-y-auto">
            <table className="table-auto w-full border-collapse text-sm">
              <thead className="text-gray-700 bg-gray-200">
                <tr>
                  <th className="px-3 py-2 text-left">ID</th>
                  <th className="px-3 py-2 text-left">Name</th>
                  <th className="px-3 py-2 text-left">Age</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Address</th>
                  <th className="px-3 py-2 text-left">Course</th>
                  <th className="px-3 py-2 text-left">Phone</th>
                  <th className="px-3 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, idx) => (
                  <tr
                    key={student.id}
                    className={`${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } text-black hover:bg-gray-100 transition duration-150 cursor-pointer`}
                    onClick={() => router.push(`/students/${student.id}`)}
                  >
                    <td className="px-3 py-2 break-words whitespace-normal">
                      {student.id}
                    </td>
                    <td className="px-3 py-2 break-words whitespace-normal">
                      {student.name}
                    </td>
                    <td className="px-3 py-2">{student.age}</td>
                    <td className="px-3 py-2 break-words whitespace-normal">
                      {student.email}
                    </td>
                    <td className="px-3 py-2 break-words whitespace-normal">
                      {student.address}
                    </td>
                    <td className="px-3 py-2 break-words whitespace-normal">
                      {student.course}
                    </td>
                    <td className="px-3 py-2 break-words whitespace-normal">
                      {student.phoneNumber ?? "—"}
                    </td>
                    <td
                      className="px-3 py-2 flex gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => handleEdit(student)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add New Student */}
          <div className="mt-6 text-center">
            <button
              onClick={handleAddClick}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
            >
              Add New Student
            </button>
          </div>
        </section>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <StudentForm
              onClose={handleModalClose}
              studentToEdit={editingStudent ?? undefined}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default StudentsPage;