import OverlappingProfiles from "@/components/atoms/overlappingImageProfiles";
import ThreeLineTable from "@/components/atoms/threelineTable";
import { Checkbox } from "@radix-ui/react-checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Check, CloudDownload } from "lucide-react";

const data: IRole[] = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 7,
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5,
  },
  {
    name: "supportadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "Inactive",
    users: 5,
  },
  {
    name: "sales personnel",
    type: "CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5,
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5,
  },
  {
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5,
  },
  {
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5,
  },
];
export type IRole = {
  name: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  createdAt: string;
  status: "active" | "Inactive";
  users: number;
};
export const columns: ColumnDef<IRole>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <button
        className="flex gap-2 items-center"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown size={12} cursor={"pointer"} />
      </button>
    ),
    cell: ({ row }) => (
      <div className="capitalize font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <div className="capitalize text-gray-500">{row.getValue("type")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Data Created",
    cell: ({ row }) => (
      <div className="lowercase text-gray-500">{row.getValue("createdAt")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      return (
        <div
          className={`capitalize px-3 py-1 flex w-fit rounded-full items-center gap-2 text-xs font-medium ${status == "active" ? "bg-green-50 text-green-600" : "text-white bg-orange-400"} `}
        >
          {status === "active" && <Check size={12} />}
          {status}
        </div>
      );
    },
  },
  {
    accessorKey: "users",
    header: "Role Users",
    cell: ({ row }) => {
      return <OverlappingProfiles amount={row.getValue("users")} />;
    },
  },
  {
    id: "download",

    cell: ({ row }) => <CloudDownload className="text-gray-500" />,
    enableSorting: false,
    enableHiding: false,
  },
];
export default function RoleTable() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="font-medium text-lg">User Roles</p>
        <button className="flex items-center cursor-pointer hover:shadow-md hover:bg-purple-600 hover:text-white ease-in-out duration-500 gap-2 w-fit bg-white border rounded-lg text-sm font-medium text-nowrap text-primaary-50 px-5 py-2">
          <CloudDownload size={14} />
          Download all
        </button>
      </div>
      <ThreeLineTable columns={columns} data={data} />
    </div>
  );
}
