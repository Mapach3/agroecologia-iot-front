import { API } from "../../config/api";
import {
  GridParams,
  transformGridParamsToFetchGridParams,
} from "../../helpers/grid-helper";
import FetchService from "../shared/FetchService";
import { PaginatedList } from "../shared/models";
import { GardenAddType, GardenUpdateType, IGarden } from "./models";

class GardensService {
  static async fetchList(
    gridParams: GridParams
  ): Promise<PaginatedList<IGarden>> {
    return await FetchService.get<PaginatedList<IGarden>>({
      url: `${API.GARDENS}`,
      gridParams: transformGridParamsToFetchGridParams(gridParams),
    });
  }
  static async fetchOne(id: string): Promise<IGarden> {
    return await FetchService.get<IGarden>({
      url: `${API.GARDENS}/${id}`,
    });
  }

  static async add(entity: GardenAddType): Promise<number> {
    return await FetchService.post<number>({
      url: API.GARDENS,
      body: entity,
    });
  }

  static async update(id: string, entity: GardenUpdateType): Promise<void> {
    await FetchService.put({
      url: `${API.GARDENS}/${id}`,
      body: entity,
    });
  }

  static async delete(id: string): Promise<void> {
    await FetchService.delete({
      url: `${API.GARDENS}/${id}`,
    });
  }
}

export default GardensService;
