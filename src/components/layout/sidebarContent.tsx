import { routes } from "@/constants/sidebar";
import SearchComponent from "../atoms/searchBar";
import { Link, useLocation } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import NewsBanner from "../atoms/staticNewsBanner";

export default function SidebarContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);
  return (
    <div className="w-full h-full flex justify-between flex-col justify-between gap-3">
      <div className="flex flex-col gap-1">
        <SearchComponent />

        {routes.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`group px-3 py-2 rounded-lg cursor-pointer w-full font-medium hover:bg-gray-50 transition-all duration-500 ease-in-out flex items-center justify-between text-gray-600 ${currentPath === item.href ? "bg-gray-50" : ""}`}
          >
            <div className="flex items-center gap-2">
              <span className="transition-colors">{item.icon}</span>
              <p
                className={`group-hover:text-black text-xs transition-colors ${
                  currentPath === item.href ? "text-black" : ""
                }`}
              >
                {item.pathname}
              </p>
            </div>

            {item.notifs > 0 && (
              <div className="px-2 py-1 text-sm bg-grey-100 text-grey-600 group-hover:bg-black bg-gray-100 transition-all duration-500 ease-in-out rounded-full group-hover:text-white transition-all">
                <p>{item.notifs}</p>
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <NewsBanner />
        <div className="flex items-center  py-2 border-t justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full overflow-hidden">
              <img src="/images/profile.jpg" alt="profile img" loading="lazy" />
            </div>
            <div className="">
              <p className="text-gray-800 text-sm">Olivia Rhye</p>
              <p className="text-gray-500 text-xs">olivia@untitledui.com</p>
            </div>
          </div>
          <LogOut className="text-gray-500" size={18} />
        </div>
      </div>
    </div>
  );
}
