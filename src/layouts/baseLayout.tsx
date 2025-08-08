import { Outlet } from "@tanstack/react-router";

export default function BaseLayout() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Outlet />
    </div>
  );
}
