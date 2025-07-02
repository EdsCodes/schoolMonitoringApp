export interface Enrollments {
  id: string;
  studentId: string;
  courseId: string;
  teacherId: string;
  student: {
    id: string;
    name: string;
    age: string;
    course: string; 
    email: string;
    address: string;
    phoneNumber?: string;
  };
  Teacher: {
    id: string;
    name: string;
    age: number;
    email: string;
    address: string;
    courseAsigned?: string;
    phoneNumber?: string; 
  };
  course: {
    id: string;
    name: string;
    startDate: string; 
    endDate: string;
    teacher: string;
    enrolledStudents: [string]; 
  };
}