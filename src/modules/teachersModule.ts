export type Teacher = {
  id: string;
  name: string;
  age: number;
  email: string;
  address: string;
};

export const teacherList: Teacher[] = [
  {
    id: '1',
    name: 'George Kelvin',
    age: 36,
    email: 'george.kelvin@example.com',
    address: '654 Second St, Springfield',
  },
  {
    id: '2',
    name: 'John Klein',
    age: 27,
    email: 'john.klein@example.com',
    address: '458 ork street, Springfield',
  },
];

export const getTeacherById = (id: string): Teacher | undefined =>
  teacherList.find((s) => s.id === id);