import { initialRoles } from "@/constants/settings";
import { Check, Plus, Users } from "lucide-react";
import { useState } from "react";
export default function UserActiveRole() {
  const [roles, setRoles] = useState(initialRoles);

  const handleRoleSelect = (roleId) => {
    setRoles(
      roles.map((role) => ({
        ...role,
        isSelected: role.id === roleId,
      }))
    );
  };

  const handleSetDefault = (roleId) => {
    setRoles(
      roles.map((role) => ({
        ...role,
        isDefault: role.id === roleId,
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
      lastActive: new Date().toLocaleDateString("en-US", {
        month: "2-digit",
        year: "numeric",
      }),
      isSelected: false,
      isDefault: false,
    };
    setRoles([...roles, newRole]);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-8 w-full pb-3 border-b ">
      <div className="text-nowrap">
        <p className="font-medium text-sm text-gray-700">Active Role</p>
        <p className="text-sm text-gray-400">
          Select active role available to the user.
        </p>
      </div>
      <div className="w-full max-w-2xl mx-auto space-y-2">
        {roles.map((role) => (
          <div
            key={role.id}
            className={`
            relative p-3 rounded-xl border transition-all duration-200 cursor-pointer
            ${
              role.isSelected
                ? "border-purple-200 bg-purple-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }
          `}
            onClick={() => handleRoleSelect(role.id)}
          >
            <div className="absolute top-6 right-6">
              <div
                className={`
              w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
              ${
                role.isSelected
                  ? "border-purple-600 bg-white"
                  : "border-gray-300"
              }
            `}
              >
                {role.isSelected && (
                  <div className="w-full h-full flex items-center justify-center rounded-full bg-purple-600 text-white">
                    <Check size={12} />
                  </div>
                )}
              </div>
            </div>

            <div className="">
              <div className="flex items-start gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h3
                    className={`font-medium ${role.isSelected ? "text-purple-700" : "text-gray-900"}`}
                  >
                    {role.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Last active {role.lastActive}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSetDefault(role.id);
                      }}
                      className={`text-sm font-medium transition-colors ${
                        role.isDefault
                          ? "text-purple-600"
                          : "text-gray-500 hover:text-purple-600"
                      }`}
                    >
                      {role.isDefault ? "Default" : "Set as default"}
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addNewRole}
          className=" p-2 duration-200 flex items-center justify-center gap-2 text-gray-600 hover:text-purple-600"
        >
          <Plus className="w-4 h-4" />
          <span className="font-medium text-sm">Add role to user</span>
        </button>
      </div>
    </div>
  );
}
