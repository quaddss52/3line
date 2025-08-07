import Sidebar from "@/components/layout/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen lg:grid bg-gray-100 lg:grid-cols-[20%_1fr]">
      <Sidebar />

      <main className=" p-4  w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}
