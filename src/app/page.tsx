import SideBar from "@/components/sideBar";
import StudentsPage from "@/pages/students";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <aside className="col-start-1 row-span-full">
        <SideBar />
      </aside>
      <main className="col-start-2 flex flex-col gap-[32px] items-center justify-center sm:items-center">
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <StudentsPage />
        </div>
      </main>
      <footer className="col-start-2 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}