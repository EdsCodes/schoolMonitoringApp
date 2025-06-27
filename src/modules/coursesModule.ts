export interface Course {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  enrolledStudents: string[]; 
}

export const courseList: Course[] = [
  {
    id: "1",
    name: "Mathematics 101",
    startDate: "2025-07-01",
    endDate: "2025-12-01",
    enrolledStudents: ["stu1", "stu2"],
  },
];
