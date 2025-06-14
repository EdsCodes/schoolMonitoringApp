import StudentForm from "@/components/studentForm";
import Title from "@/components/title";
import StudentsDetailed from "@/pages/detailed_pages/studentsDetailed";
import StudentsPage from "@/pages/students";
import Inicio from "@/pages/inicio";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[32px] justify-start">
      <Title />
      <Inicio />
      <StudentsPage />
      <StudentForm />
      <StudentsDetailed />
    </div>
  );
}
