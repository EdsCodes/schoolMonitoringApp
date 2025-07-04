export type Student = {
  id: string;
  name: string;
  age: number;
  course: string;
  email: string;
  address: string;
  phoneNumber?: string;
};

export const studentList: Student[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 16,
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield',
    course: 'physics',
    phoneNumber: '123-456-7890',
  },
  {
    id: '2',
    name: 'Ana Smith',
    age: 17,
    email: 'ana.smith@example.com',
    address: '456 Elm St, Springfield',
    course: 'mathematics',
    phoneNumber: '123-456-7890',
  },
  {
    id: '3',
    name: 'George Castro',
    age: 17,
    email: 'ana.smith@example.com',
    address: '456 Elm St, Springfield',
    course: 'mathematics',
    phoneNumber: '123-456-7890',
  },
  {
    id: '4',
    name: 'John Wick',
    age: 17,
    email: 'ana.smith@example.com',
    address: '456 Elm St, Springfield',
    course: 'pshysics',
    phoneNumber: '123-456-7890',
  },
  {
    id: '5',
    name: 'Joseph Doe',
    age: 17,
    email: 'ana.smith@example.com',
    address: '456 Elm St, Springfield',
    course: 'mathematics',
    phoneNumber: '123-456-7890',
  },
  {
    id: '6',
    name: 'Mary Roberts',
    age: 17,
    email: 'ana.smith@example.com',
    address: '456 Elm St, Springfield',
    course: 'pshysics',
    phoneNumber: '123-456-7890',
  },
];

export const getStudentById = (id: string): Student | undefined =>
  studentList.find((s) => s.id === id);