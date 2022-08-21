import { API } from "../../config/api";
import FetchService from "../shared/FetchService";
import { IRole } from "./models";

class RolesService {
  static async fetchAll(): Promise<IRole[]> {
    return FetchService.get<Promise<IRole[]>>({
      url: `${API.ROLES}/all`,
    });
  }
}

export default RolesService;
