import SettingsService from "../apidefinitions/settings.service";
import { useQuery } from "@tanstack/react-query";
export const useGetAllRoles = () => {
  return useQuery({
    queryKey: ["system_roles"],
    queryFn: SettingsService.getAllRole,
  });
};
