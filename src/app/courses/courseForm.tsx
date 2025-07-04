"use client";

import React, { useState } from "react";
import { addCourse } from "@/modules/coursesModule";
import { teacherList } from "@/modules/teachersModule";
import { studentList } from "@/modules/studentsModule";
import { Course } from "@/modules/coursesModule";

interface Props {
  onClose: () => void;
  courseToEdit?: Course;
}

const CourseForm: React.FC<Props> = ({ onClose, courseToEdit }) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [dateError, setDateError] = useState("");

  const handleStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map((opt) => opt.value);
    setSelectedStudents(selectedOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (new Date(startDate) > new Date(endDate)) {
      setDateError("Start date cannot be after end date.");
      return;
    }

    setDateError("");

    const newCourse: Course = {
      id: crypto.randomUUID(),
      name,
      startDate,
      endDate,
      teacherId,
      enrolledStudents: selectedStudents,
    };

    addCourse(newCourse);
    onClose();
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl w-[500px] max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Name"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="date"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <input
          type="date"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />

        {dateError && (
          <p className="text-red-600 text-sm font-medium">{dateError}</p>
        )}

        <select
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
          required
        >
          <option value="">Select a Teacher</option>
          {teacherList.map((teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.name}
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium text-gray-700">Enroll Students:</label>
        <select
          multiple
          className="w-full border border-gray-300 rounded px-4 py-2 h-32"
          onChange={handleStudentChange}
          value={selectedStudents}
        >
          {studentList.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name} ({student.email})
            </option>
          ))}
        </select>

        <div className="flex justify-end gap-2 pt-4">
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
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;