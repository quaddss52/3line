import { useState } from "react";
import { Search, SearchIcon } from "lucide-react";

export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-md">
      <div
        className={`absolute inset-0 bg-purple-200 rounded-2xl transition-all duration-300 ${
          isFocused ? "scale-105 opacity-40 blur-sm" : "scale-100 opacity-0"
        }`}
      />

      <div
        className={`relative bg-white rounded-lg border-2 transition-all duration-300 ${
          isFocused
            ? "border-purple-300 shadow-md"
            : "border-purple-200 shadow-sm"
        }`}
      >
        <div className="flex items-center px-2 py-[8px]">
          <Search
            size={12}
            className={` mr-2 transition-colors duration-300 ${
              isFocused ? "text-primary-700" : "text-grey-700"
            }`}
          />
          <input
            type="text"
            placeholder="Olivia Rhye"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="flex-1 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-xs"
          />
        </div>
      </div>
    </div>
  );
}
