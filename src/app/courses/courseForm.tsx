"use client";

import React, { useState, useEffect } from "react";
import { addCourse, editCourse } from "@/modules/coursesModule";
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

  useEffect(() => {
    if (courseToEdit) {
      setName(courseToEdit.name);
      setStartDate(courseToEdit.startDate);
      setEndDate(courseToEdit.endDate);
      setTeacherId(courseToEdit.teacherId);
      setSelectedStudents(courseToEdit.enrolledStudents);
    }
  }, [courseToEdit]);

  const handleStudentChange = (studentId: string) => {
    const isSelected = selectedStudents.includes(studentId);
    if (isSelected) {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (new Date(startDate) > new Date(endDate)) {
      setDateError("Start date cannot be after end date.");
      return;
    }

    setDateError("");

    const newCourse: Course = {
      id: courseToEdit?.id ?? crypto.randomUUID(),
      name,
      startDate,
      endDate,
      teacherId,
      enrolledStudents: selectedStudents,
    };

    courseToEdit ? editCourse(newCourse) : addCourse(newCourse);
    onClose();
  };

  return (
    <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-2xl w-[500px] max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {courseToEdit ? "Edit Course" : "Add New Course"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Course Name */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Course Name</span>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        {/* Start Date */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Start Date</span>
          <input
            type="date"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </label>

        {/* End Date */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">End Date</span>
          <input
            type="date"
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </label>

        {/* Date Error */}
        {dateError && (
          <p className="text-red-600 text-sm font-medium">{dateError}</p>
        )}

        {/* Teacher Select */}
        <label className="block">
          <span className="text-gray-700 text-sm font-medium">Teacher</span>
          <select
            className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
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
        </label>

        {/* Student Selection */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Enroll Students:
          </label>
          <div className="space-y-2 max-h-40 overflow-y-auto border border-gray-200 rounded p-2">
            {studentList.map((student) => (
              <label key={student.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={student.id}
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => handleStudentChange(student.id)}
                />
                <span>{student.name} ({student.email})</span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
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
            {courseToEdit ? "Save Changes" : "Add Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
