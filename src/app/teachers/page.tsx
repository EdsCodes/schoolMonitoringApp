"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { teacherList } from "../../modules/teachersModule";

function teachersPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          Teacher List
        </h1>

        <div className="w-full bg-white shadow-xl rounded-lg overflow-x-auto p-4">
          <table className="table-auto min-w-max w-full border-collapse">
            <thead className="text-lg text-gray-700 bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Course Asigned</th>
              </tr>
            </thead>
            <tbody>
              {teacherList.map((teacher, idx) => (
                <tr
                  key={teacher.id}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } text-black hover:bg-gray-100 cursor-pointer transition duration-150`}
                  onClick={() => router.push(`/teachers/${teacher.id}`)}
                >
                  <td className="px-4 py-3">{teacher.id}</td>
                  <td className="px-4 py-3">{teacher.name}</td>
                  <td className="px-4 py-3">{teacher.age}</td>
                  <td className="px-4 py-3">{teacher.email}</td>
                  <td className="px-4 py-3">{teacher.address}</td>
                  <td className="px-4 py-3">{teacher.courseAsigned}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-center">
            <Link href="/studentForm">
              <p className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded cursor-pointer">
                Add New Teacher
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default teachersPage;