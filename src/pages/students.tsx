import React from "react";

const students = [
    { id: 1, name: "John Doe", age: 16, grade: "10th" },
    { id: 2, name: "Jane Smith", age: 17, grade: "11th" },
    { id: 3, name: "Sam Wilson", age: 15, grade: "9th" },
    { id: 4, name: "Emily Johnson", age: 16, grade: "10th" },
];

const StudentsPage: React.FC = () => {
    return (
        <div className="min-h-screen p-4">
            <div className="w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Students List
                </h1>
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full table-auto">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    ID
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Name
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Age
                                </th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                                    Grade
                                </th>
                            </tr>                                                                
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr
                                    key={student.id}
                                    className={`${
                                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                    } hover:bg-gray-100`}
                                >
                                    <td className="px-4 py-2 text-sm text-gray-700">{student.id}</td>
                                    <td className="px-4 py-2 text-sm text-gray-700">{student.name}</td>
                                    <td className="px-4 py-2 text-sm text-gray-700">{student.age}</td>
                                    <td className="px-4 py-2 text-sm text-gray-700">{student.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default StudentsPage;