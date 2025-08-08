import Sidebar from "@/components/layout/sidebar";
import { Outlet } from "@tanstack/react-router";

export default function RouteComponent() {
  return (
    <div className="lg:h-screen  w-full lg:grid bg-gray-100 lg:grid-cols-[20%_1fr]">
      <Sidebar />

      <main className=" noscrollbar p-5 w-full h-full overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}
