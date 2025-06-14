import React from "react";
import Link from "next/link";

const students = [
  { id: 1, name: "John Doe", age: 16, course: "10th" },
  { id: 2, name: "Jane Smith", age: 17, course: "11th" },
  { id: 3, name: "Sam Wilson", age: 15, course: "9th" },
  { id: 4, name: "Emily Johnson", age: 16, course: "10th" },
];

const StudentsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Students List
        </h1>

        <div className="w-full bg-white shadow-xl rounded-lg overflow-x-auto p-4">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-lg text-gray-700 bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Age</th>
                <th className="px-4 py-3 text-left">Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr
                  key={student.id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } text-black hover:bg-gray-100`}
                >
                  <td className="px-4 py-3">{student.id}</td>
                  <td className="px-4 py-3">{student.name}</td>
                  <td className="px-4 py-3">{student.age}</td>
                  <td className="px-4 py-3">{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-center">
            <Link href="/studentForm">
              <p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Add New Student
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentsPage;