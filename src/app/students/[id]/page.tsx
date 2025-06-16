import { getStudentById } from "@/modules/studentsModule";
import React from "react";

type Params = {
  params: { id: string };
};

export default function StudentDetailedPage({ params }: Params) {
  const student = getStudentById(params.id);

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500 font-semibold text-lg">Estudiante no encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Detalles del Estudiante</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">{student.name}</h2>
        <p className="text-gray-600"><strong>Edad:</strong> {student.age}</p>
        <p className="text-gray-600"><strong>Grado:</strong> {student.course}</p>
        <p className="text-gray-600"><strong>Email:</strong> {student.email}</p>
        <p className="text-gray-600"><strong>Dirección:</strong> {student.address}</p>
      </div>
    </div>
  );
}
