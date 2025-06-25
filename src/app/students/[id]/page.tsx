"use client";

import React, { use } from "react";
import { studentList } from "@/modules/studentsModule";
import { Student } from "@/modules/studentsModule";

type ParamsPromise = Promise<{ id: string }>;

type Props = {
  params: ParamsPromise;
};

export default function StudentsDetailed({ params }: Props) {
  const resolvedParams = use(params);
  const student = studentList.find((s: Student) => s.id === resolvedParams.id);

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-semibold text-lg">Estudiante no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Student Detailed Page</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{student.name}</h2>
        <p className="text-gray-600"><strong>Age:</strong> {student.age}</p>
        <p className="text-gray-600"><strong>Course:</strong> {student.course}</p>
        <p className="text-gray-600"><strong>Email:</strong> {student.email}</p>
        <p className="text-gray-600"><strong>Address:</strong> {student.address}</p>
      </div>
    </div>
  );
}