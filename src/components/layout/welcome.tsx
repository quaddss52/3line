import { Link } from "@tanstack/react-router";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="font-semibold text-xl">Have a fun review!</p>
      <Link to="/settings">
        <button className="flex items-center cursor-pointer hover:shadow-md hover:bg-purple-600 hover:text-white ease-in-out duration-500 gap-2 w-fit bg-white border rounded-lg text-sm font-medium text-nowrap text-primaary-50 px-5 py-2">
          View
        </button>
      </Link>
    </div>
  );
}
