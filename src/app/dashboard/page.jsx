import Sidebar from "@/app/dashboard/components/Sidebar"; 
import Header from "@/app/dashboard/components/Header";
import BarChartMock from "@/app/dashboard/components/BarChartMock";
import DonutChartMock from "@/app/dashboard/components/DonutChartMock";
import CourseList from "@/app/dashboard/components/CourseList";

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-[#F4F6FC] min-h-screen">
        <Header />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-6">
          <div className="md:col-span-2">
            <BarChartMock />
          </div>
          <div>
            <DonutChartMock />
          </div>
        </div>

        <div className="px-6 mt-6">
          <CourseList />
        </div>
      </main>
    </div>
  );
}
