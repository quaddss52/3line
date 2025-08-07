import SearchComponent from "../atoms/searchBar";

export default function SidebarContent() {
  return (
    <div className="w-full flex flex-col gap-5">
      <SearchComponent />
    </div>
  );
}
