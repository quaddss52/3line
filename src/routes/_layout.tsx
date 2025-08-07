import Sidebar from "@/components/layout/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen grid grid-cols-1 bg-gray-100 lg:grid-cols-[20%_1fr]">
      <Sidebar />

      <main className="flex-1 p-4 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
}
