import { jsx, jsxs } from 'react/jsx-runtime';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { c as cn } from './utils-H80jjgLf.mjs';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Mail, Check, Users, Plus, CircleIcon } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { useState } from 'react';
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
          className: " p-2 duration-200 flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600",
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
    /* @__PURE__ */ jsx(UserActiveRole, {})
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
          className: ` px-4 py-2 text-sm w-full font-medium border rounded-none border-gray-200 bg-white transition-all duration-200 whitespace-nowrap data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50`,
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
//# sourceMappingURL=route-CCvw36Hm.mjs.map
