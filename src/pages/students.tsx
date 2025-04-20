import React from "react";

const students = [
  { id: 1, name: "John Doe", age: 16, grade: "10th" },
  { id: 2, name: "Jane Smith", age: 17, grade: "11th" },
  { id: 3, name: "Sam Wilson", age: 15, grade: "9th" },
  { id: 4, name: "Emily Johnson", age: 16, grade: "10th" },
];

const StudentsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen">

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          Students List
        </h1>

        <div className="w-full max-w-full bg-white shadow-xl rounded-lg overflow-x-auto">
          <table className="w-full table-fixed">
            <thead className="text-lg text-gray-700 bg-gray-200">
              <tr>
                <th className="px-8 py-4 text-left">ID</th>
                <th className="px-8 py-4 text-left">Name</th>
                <th className="px-8 py-4 text-left">Age</th>
                <th className="px-8 py-4 text-left">Grade</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr
                  key={student.id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } text-black hover:bg-gray-200 text-base`}
                >
                  <td className="px-8 py-4">{student.id}</td>
                  <td className="px-8 py-4">{student.name}</td>
                  <td className="px-8 py-4">{student.age}</td>
                  <td className="px-8 py-4">{student.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default StudentsPage;