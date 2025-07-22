"use client";

import React, { use } from "react";
import { Course, courseList } from "@/modules/coursesModule";
import { Student, studentList } from "@/modules/studentsModule";
import { Teacher, teacherList } from "@/modules/teachersModule";

type ParamsPromise = Promise<{ id: string }>;

type Props = {
  params: ParamsPromise;
};

export default function CourseDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const course = courseList.find((c: Course) => c.id === resolvedParams.id);

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-semibold text-lg">Course not found.</p>
      </div>
    );
  }

  const enrolledStudents: Student[] = studentList.filter((student) =>
    course.enrolledStudents?.includes(student.id)
  );

  const teacher: Teacher | undefined = teacherList.find((t) => t.id === course.teacherId);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Detail</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{course.name}</h2>
        <p className="text-gray-600">
          <strong>Start Date:</strong> {course.startDate}
        </p>
        <p className="text-gray-600">
          <strong>End Date:</strong> {course.endDate}
        </p>
        <p className="text-gray-600">
          <strong>Teacher:</strong> {teacher ? teacher.name : "Unknown"}
        </p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Enrolled Students:</h3>
          {enrolledStudents.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {enrolledStudents.map((student) => (
                <li key={student.id} className="py-2">
                  <p className="text-gray-700">{student.name}</p>
                  <p className="text-gray-500 text-sm">{student.email}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No students enrolled yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
