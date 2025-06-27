export type Student = {
  id: string;
  name: string;
  age: number;
  course: string;
  email: string;
  address: string;
};

export const studentList: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 16,
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield',
    course: 'physics',
  },
  {
    id: '2',
    name: 'Ana Smith',
    age: 17,
    email: 'ana.smith@example.com',
    address: '456 Elm St, Springfield',
    course: 'mathematics',
  },
];

export const getStudentById = (id: string): Student | undefined =>
  studentList.find((s) => s.id === id);