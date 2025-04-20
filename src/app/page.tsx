import Title from "@/components/title";
import StudentsPage from "@/pages/students";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[32px] justify-start">
      <Title />
      <StudentsPage />
    </div>
  );
}
