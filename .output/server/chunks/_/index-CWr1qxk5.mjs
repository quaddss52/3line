import { jsx, jsxs } from 'react/jsx-runtime';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { c as cn } from './utils-H80jjgLf.mjs';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Mail, Check, Users, Plus, CloudDownload, CircleIcon, ArrowUpDown } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
import { useReactTable, getFilteredRowModel, getSortedRowModel, getPaginationRowModel, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { Checkbox } from '@radix-ui/react-checkbox';
import 'clsx';
import 'tailwind-merge';

function Navbar({ pageTitle, subHeading }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-medium text-3xl", children: pageTitle }),
    /* @__PURE__ */ jsx("p", { className: " text-gray-500", children: subHeading })
  ] });
}
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
const existingTabs = [
  { id: "details", label: "My details" },
  { id: "profile", label: "Profile" },
  { id: "password", label: "Password" },
  { id: "team", label: "Team" },
  { id: "plan", label: "Plan" },
  { id: "roles", label: "Roles" },
  { id: "notifications", label: "Notifications" },
  { id: "integrations", label: "Integrations" },
  { id: "api", label: "API" }
];
const initialRoles = [
  {
    id: 1,
    name: "Superadmin",
    lastActive: "06/2023",
    isSelected: true,
    isDefault: true
  },
  {
    id: 2,
    name: "Developeradmin",
    lastActive: "01/2023",
    isSelected: false,
    isDefault: false
  },
  {
    id: 3,
    name: "Supportadmin",
    lastActive: "10/2022",
    isSelected: false,
    isDefault: false
  }
];
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsx(CircleIcon, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
function EmailConnection() {
  const [emailConnection, setEmailCOnnection] = useState("1");
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5 md:gap-8 w-full pb-3 border-b ", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-nowrap", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-gray-700", children: "Connected email" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Select role account" })
    ] }),
    /* @__PURE__ */ jsxs(
      RadioGroup,
      {
        value: emailConnection,
        onValueChange: (e) => setEmailCOnnection(e),
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
            /* @__PURE__ */ jsx(
              RadioGroupItem,
              {
                value: "1",
                id: "r1",
                className: "mt-1 data-[state=checked]:border-[#7F56D9] [&>span]:data-[state=checked]:bg-[#7F56D9]"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "r1", children: "My account email" }),
              /* @__PURE__ */ jsx("p", { className: " text-gray-400", children: "olivia@untitledui.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 w-full", children: [
            /* @__PURE__ */ jsx(
              RadioGroupItem,
              {
                value: "2",
                id: "r2",
                className: "mt-1 data-[state=checked]:border-[#7F56D9] [&>span]:data-[state=checked]:bg-[#7F56D9]"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-sm w-full", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "r2", children: "An alternative email" }),
              emailConnection === "2" && /* @__PURE__ */ jsxs("div", { className: "p-2 rounded-lg flex gap-2 items-center w-full text-gray-400  md:w-[70%] border bg-white", children: [
                /* @__PURE__ */ jsx(Mail, {}),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "text",
                    className: "border-none  outline-none w-full",
                    placeholder: "olivia@untitledui.com"
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function OverlappingProfiles({ amount }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
    Array.from({ length: Math.min(amount, 5) }).map((_, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "h-8 w-8 -ml-3 first:ml-0 rounded-full border-white border-2 overflow-hidden",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/images/profile.jpg",
            alt: `profile ${index + 1}`,
            className: "w-full h-full object-cover"
          }
        )
      },
      index
    )),
    amount > 5 && /* @__PURE__ */ jsxs("div", { className: "h-8 w-8 -ml-2 rounded-full flex bg-gray-100 text-gray-600 text-xs font-medium items-center justify-center border-white border-2", children: [
      "+",
      amount - 5
    ] })
  ] });
}
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function ThreeLineTable({
  data: data2,
  columns: columns2
}) {
  var _a;
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data: data2,
    columns: columns2,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  });
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-md border", children: /* @__PURE__ */ jsxs(Table, { className: "bg-white shadow-md", children: [
    /* @__PURE__ */ jsx(TableHeader, { className: "bg-gray-100", children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx(TableRow, { children: headerGroup.headers.map((header) => {
      return /* @__PURE__ */ jsx(TableHead, { children: header.isPlaceholder ? null : flexRender(
        header.column.columnDef.header,
        header.getContext()
      ) }, header.id);
    }) }, headerGroup.id)) }),
    /* @__PURE__ */ jsx(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx(
      TableRow,
      {
        "data-state": row.getIsSelected() && "selected",
        children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
      },
      row.id
    )) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: columns2.length, className: "h-24 text-center", children: "No results." }) }) })
  ] }) });
}
const data = [
  {
    name: "Superadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 7
  },
  {
    name: "Merchantadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5
  },
  {
    name: "supportadmin",
    type: "DEFAULT",
    createdAt: "Jan 1, 2023",
    status: "Inactive",
    users: 5
  },
  {
    name: "sales personnel",
    type: "CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5
  },
  {
    name: "Deputy sales personnel",
    type: "CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5
  },
  {
    name: "Developeradmin",
    type: "SYSTEM-CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5
  },
  {
    name: "Developer-basic",
    type: "SYSTEM-CUSTOM",
    createdAt: "Jan 1, 2023",
    status: "active",
    users: 5
  }
];
const columns = [
  {
    id: "select",
    header: ({ table }) => /* @__PURE__ */ jsx(
      Checkbox,
      {
        checked: table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected() && "indeterminate",
        onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
        "aria-label": "Select all"
      }
    ),
    cell: ({ row }) => /* @__PURE__ */ jsx(
      Checkbox,
      {
        checked: row.getIsSelected(),
        onCheckedChange: (value) => row.toggleSelected(!!value),
        "aria-label": "Select row"
      }
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "name",
    header: ({ column }) => /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex gap-2 items-center",
        onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        children: [
          "Name",
          /* @__PURE__ */ jsx(ArrowUpDown, { size: 12, cursor: "pointer" })
        ]
      }
    ),
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "capitalize font-medium", children: row.getValue("name") })
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "capitalize text-gray-500", children: row.getValue("type") })
  },
  {
    accessorKey: "createdAt",
    header: "Data Created",
    cell: ({ row }) => /* @__PURE__ */ jsx("div", { className: "lowercase text-gray-500", children: row.getValue("createdAt") })
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `capitalize px-3 py-1 flex w-fit rounded-full items-center gap-2 text-xs font-medium ${status == "active" ? "bg-green-50 text-green-600" : "text-white bg-orange-400"} `,
          children: [
            status === "active" && /* @__PURE__ */ jsx(Check, { size: 12 }),
            status
          ]
        }
      );
    }
  },
  {
    accessorKey: "users",
    header: "Role Users",
    cell: ({ row }) => {
      return /* @__PURE__ */ jsx(OverlappingProfiles, { amount: row.getValue("users") });
    }
  },
  {
    id: "download",
    cell: ({ row }) => /* @__PURE__ */ jsx(CloudDownload, { className: "text-gray-500" }),
    enableSorting: false,
    enableHiding: false
  }
];
function RoleTable() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-lg", children: "User Roles" }),
      /* @__PURE__ */ jsxs("button", { className: "flex items-center cursor-pointer hover:shadow-md hover:bg-purple-600 hover:text-white ease-in-out duration-500 gap-2 w-fit bg-white border rounded-lg text-sm font-medium text-nowrap text-primaary-50 px-5 py-2", children: [
        /* @__PURE__ */ jsx(CloudDownload, { size: 14 }),
        "Download all"
      ] })
    ] }),
    /* @__PURE__ */ jsx(ThreeLineTable, { columns, data })
  ] });
}
function UserActiveRole() {
  const [roles, setRoles] = useState(initialRoles);
  const handleRoleSelect = (roleId) => {
    setRoles(
      roles.map((role) => ({
        ...role,
        isSelected: role.id === roleId
      }))
    );
  };
  const handleSetDefault = (roleId) => {
    setRoles(
      roles.map((role) => ({
        ...role,
        isDefault: role.id === roleId
      }))
    );
  };
  const addNewRole = () => {
    if (roles.length == 4) {
      alert("Role limit reached");
      return;
    }
    const newRole = {
      id: roles.length + 1,
      name: `New Role ${roles.length + 1}`,
      lastActive: (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
        month: "2-digit",
        year: "numeric"
      }),
      isSelected: false,
      isDefault: false
    };
    setRoles([...roles, newRole]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-5 md:gap-8 w-full pb-3 border-b ", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-nowrap", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-gray-700", children: "Active Role" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Select active role available to the user." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl mx-auto space-y-2", children: [
      roles.map((role) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `
            relative p-3 rounded-xl border transition-all duration-200 cursor-pointer
            ${role.isSelected ? "border-purple-200 bg-purple-50" : "border-gray-200 bg-white hover:border-gray-300"}
          `,
          onClick: () => handleRoleSelect(role.id),
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: `
              w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
              ${role.isSelected ? "border-purple-600 bg-white" : "border-gray-300"}
            `,
                children: role.isSelected && /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center rounded-full bg-purple-600 text-white", children: /* @__PURE__ */ jsx(Check, { size: 12 }) })
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-white flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-gray-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(
                  "h3",
                  {
                    className: `font-medium ${role.isSelected ? "text-purple-700" : "text-gray-900"}`,
                    children: role.name
                  }
                ),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
                  "Last active ",
                  role.lastActive
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: (e) => {
                        e.stopPropagation();
                        handleSetDefault(role.id);
                      },
                      className: `text-sm font-medium transition-colors ${role.isDefault ? "text-purple-600" : "text-gray-500 hover:text-purple-600"}`,
                      children: role.isDefault ? "Default" : "Set as default"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: (e) => e.stopPropagation(),
                      className: "text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors",
                      children: "Edit"
                    }
                  )
                ] })
              ] })
            ] }) })
          ]
        },
        role.id
      )),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: addNewRole,
          className: "cursor-pointer p-2 duration-200 flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600",
          children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Add role to user" })
          ]
        }
      )
    ] })
  ] });
}
function RoleSettingsTab() {
  return /* @__PURE__ */ jsxs("div", { className: "w-full flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full pb-3 border-b ", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium text-lg", children: "User Roles" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400", children: "Update your roles details and information." })
    ] }),
    /* @__PURE__ */ jsx(EmailConnection, {}),
    /* @__PURE__ */ jsx(UserActiveRole, {}),
    /* @__PURE__ */ jsx(RoleTable, {})
  ] });
}
function RoleSettings() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 ", children: [
    /* @__PURE__ */ jsx(
      Navbar,
      {
        pageTitle: "Settings",
        subHeading: "Manage your team and preferences here."
      }
    ),
    /* @__PURE__ */ jsxs(Tabs, { defaultValue: "roles", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx(TabsList, { className: "inline-flex items-center bg-white rounded-lg overflow-hidden  p-0 border border-gray-200 min-w-fit", children: existingTabs.map((item, index) => /* @__PURE__ */ jsx(
        TabsTrigger,
        {
          value: item.id,
          className: ` px-4 py-2 cursor-pointer text-sm w-full font-medium border rounded-none border-gray-200 bg-white transition-all duration-200 whitespace-nowrap data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50`,
          children: item.label
        },
        index
      )) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(TabsContent, { value: "details", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "My Details" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "profile", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "My Profile" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "password", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Password" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "team", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Team" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "plan", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Plan" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "roles", className: "", children: /* @__PURE__ */ jsx(RoleSettingsTab, {}) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "notifications", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Notifications" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "integrations", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Integrations" }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "api", className: "", children: /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Api" }) })
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(RoleSettings, {});

export { SplitComponent as component };
//# sourceMappingURL=index-CWr1qxk5.mjs.map
