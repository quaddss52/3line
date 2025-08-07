import Logo from "../icons/logo";
import SidebarContent from "./sidebarContent";

export default function Sidebar() {
  return (
    <div className="h-fit lg:h-full shadow-md flex lg:flex-col justify-between bg-white gap-5 p-5">
      <div className="flex flex-col w-full gap-5">
        <div className="flex items-center gap-2">
          <Logo />
          <h3 className="font-medium">Untitled UI</h3>
        </div>
        <div className="hidden lg:block w-full">
          <SidebarContent />
        </div>
      </div>
    </div>
  );
}
