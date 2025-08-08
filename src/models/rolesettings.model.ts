export type IRole = {
  name: string;
  type: "DEFAULT" | "CUSTOM" | "SYSTEM-CUSTOM";
  createdAt: string;
  status: "active" | "Inactive";
  users: number;
};
export type IInitRole = {
  id: number;
  name: string;
  lastActive: string;
  isSelected: boolean;
  isDefault: boolean;
};
export type settingTab = { id: string; label: string };
