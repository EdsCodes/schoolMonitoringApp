"use client";

import React, { useEffect, useState } from "react";
import { Student, addStudent, editStudent, deleteStudent } from "@/modules/studentsModule";

interface Props {
  onClose: () => void;
  studentToEdit?: Student;
}

const StudentForm: React.FC<Props> = ({ onClose, studentToEdit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    if (studentToEdit) {
      setName(studentToEdit.name);
      setAge(studentToEdit.age);
      setEmail(studentToEdit.email);
      setAddress(studentToEdit.address);
      setCourse(studentToEdit.course);
      setPhoneNumber(studentToEdit.phoneNumber ?? "");
    }
  }, [studentToEdit]);

  const generateShortId = () =>
    Math.random().toString(36).substring(2, 6).toUpperCase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newStudent: Student = {
      id: studentToEdit?.id ?? generateShortId(),
      name,
      age,
      email,
      address,
      course,
      phoneNumber: phoneNumber || undefined,
    };

    if (studentToEdit) {
      editStudent(newStudent);
    } else {
      addStudent(newStudent);
    }

    onClose();
  };

  const handleDelete = () => {
    if (studentToEdit && confirm("Are you sure you want to delete this student?")) {
      deleteStudent(studentToEdit.id);
      onClose();
    }
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl w-[500px] max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {studentToEdit ? "Edit Student" : "Add New Student"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Full Name</span>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        {/* Age */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Age</span>
          <input
            type="number"
            min="0"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </label>

        {/* Email */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Email</span>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        {/* Address */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Address</span>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>

        {/* Course */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Course</span>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </label>

        {/* Phone Number */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Phone Number (optional)</span>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        {/* Action Buttons */}
        <div className="flex justify-between gap-2 pt-4">
          {studentToEdit && (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow"
            >
              Delete
            </button>
          )}

          <div className="flex gap-2 ml-auto">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              {studentToEdit ? "Save Changes" : "Add Student"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;