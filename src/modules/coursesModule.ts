export interface Course {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  teacherId: string;
  enrolledStudents: string[]; 
}

export const courseList: Course[] = [
  {
    id: "1",
    name: "Mathematics 101",
    startDate: "2025-07-01",
    endDate: "2025-12-01",
    teacherId: "1",
    enrolledStudents: ["1", "2"],
  },
  {
    id: "2",
    name: "Physics 202",
    startDate: "2025-08-01",
    endDate: "2026-01-01",
    teacherId: "2",
    enrolledStudents: ["3", "4", "5", "6"],
  },
];
