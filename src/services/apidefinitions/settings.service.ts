import { IRole } from "@/models/rolesettings.model";
import HTTPClient from "../http.config";

export default class SettingsService {
  static async getAllRole() {
    const response = await HTTPClient.get<IRole[]>(`roles`);
    return response.data;
  }
}
