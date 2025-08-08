import { useState } from "react";
import Logo from "../icons/logo";
import MenuIcon from "../icons/Menu";
import SidebarContent from "./sidebarContent";
import SideDrawer from "./sideDrawer";

export default function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className=" h-fit lg:h-full sticky top-0 z-40 shadow-md flex overflow-y-scroll  lg:flex-col justify-between bg-white gap-5 p-5 lg:p-3 xl:p-5">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <h3 className="font-medium">Untitled UI</h3>
        </div>
        <div className="lg:hidden">
          <MenuIcon onClick={() => setIsDrawerOpen(true)} />
          {isDrawerOpen && (
            <SideDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer} />
          )}
        </div>
      </div>
      <div className="hidden lg:block w-full h-full">
        <SidebarContent />
      </div>
    </div>
  );
}
