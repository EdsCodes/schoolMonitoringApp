export interface Course {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  teacherId: string;
  enrolledStudents: string[]; 
}

interface Props {
  onClose: () => void;
  courseToEdit: Course | null;
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

/**
 * Agrega un nuevo curso al array.
 */
export const addCourse = (course: Course): void => {
  courseList.push(course);
};

/**
 * Edita un curso existente por ID.
 */
export const editCourse = (updatedCourse: Course): boolean => {
  const index = courseList.findIndex((c) => c.id === updatedCourse.id);
  if (index !== -1) {
    courseList[index] = updatedCourse;
    return true;
  }
  return false; // No se encontró el curso
};

/**
 * Elimina un curso por ID.
 */
export const deleteCourse = (courseId: string): boolean => {
  const index = courseList.findIndex((c) => c.id === courseId);
  if (index !== -1) {
    courseList.splice(index, 1);
    return true;
  }
  return false; // No se encontró el curso
};
