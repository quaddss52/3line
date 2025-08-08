import EmailConnection from "./emailConnection";
import RoleTable from "./roleTable";
import UserActiveRole from "./userActiveRole";

export default function RoleSettingsTab() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col w-full pb-3 border-b ">
        <p className="font-medium text-lg">User Roles</p>
        <p className="text-sm text-gray-400">
          Update your roles details and information.
        </p>
      </div>
      <EmailConnection />
      <UserActiveRole />
      <RoleTable />
    </div>
  );
}
