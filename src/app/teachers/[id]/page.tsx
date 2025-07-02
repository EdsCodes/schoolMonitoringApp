"use client";

import React, { use } from "react";
import { Teacher, teacherList } from "@/modules/teachersModule";

type ParamsPromise = Promise<{ id: string }>;

type Props = {
  params: ParamsPromise;
};

export default function teachersDetailed({ params }: Props) {
  const resolvedParams = use(params);
  const teacher = teacherList.find((s: Teacher) => s.id === resolvedParams.id);

  if (!teacher) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-semibold text-lg">Teacher not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Teachers Detailed Page</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{teacher.name}</h2>
        <p className="text-gray-600"><strong>Age:</strong> {teacher.age}</p>
        <p className="text-gray-600"><strong>Email:</strong> {teacher.email}</p>
        <p className="text-gray-600"><strong>Address:</strong> {teacher.address}</p>
        <p className="text-gray-600"><strong>Course Asigned:</strong> {teacher.courseAsigned}</p>
        <p className="text-gray-600"><strong>Phone Number:</strong> {teacher.phoneNumber}</p>
      </div>
    </div>
  );
}