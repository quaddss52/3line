import { IInitRole, settingTab } from "@/models/rolesettings.model";

export const existingTabs: settingTab[] = [
  { id: "details", label: "My details" },
  { id: "profile", label: "Profile" },
  { id: "password", label: "Password" },
  { id: "team", label: "Team" },
  { id: "plan", label: "Plan" },
  { id: "roles", label: "Roles" },
  { id: "notifications", label: "Notifications" },
  { id: "integrations", label: "Integrations" },
  { id: "api", label: "API" },
];
export const initialRoles: IInitRole[] = [
  {
    id: 1,
    name: "Superadmin",
    lastActive: "06/2023",
    isSelected: true,
    isDefault: true,
  },
  {
    id: 2,
    name: "Developeradmin",
    lastActive: "01/2023",
    isSelected: false,
    isDefault: false,
  },
  {
    id: 3,
    name: "Supportadmin",
    lastActive: "10/2022",
    isSelected: false,
    isDefault: false,
  },
];
