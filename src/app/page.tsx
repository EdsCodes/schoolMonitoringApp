import Title from "@/components/title";
import Inicio from "@/components/inicio";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[32px] justify-start">
      <Title />
      <Inicio />
    </div>
  );
}
