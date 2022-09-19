import { API } from "../../config/api";
import {
  GridParams,
  transformGridParamsToFetchGridParams,
} from "../../helpers/grid-helper";
import FetchService from "../shared/FetchService";
import { PaginatedList } from "../shared/models";
import { CropAddType, CropUpdateType, ICrop } from "./models";

class CropsService {
  static async fetchList(
    gridParams: GridParams
  ): Promise<PaginatedList<ICrop>> {
    return await FetchService.get<PaginatedList<ICrop>>({
      url: `${API.CROPS}`,
      gridParams: transformGridParamsToFetchGridParams(gridParams),
    });
  }
  static async fetchOne(id: string): Promise<ICrop> {
    return await FetchService.get<ICrop>({
      url: `${API.CROPS}/${id}`,
    });
  }
  static async add(entity: CropAddType): Promise<number> {
    return await FetchService.post<number>({
      url: API.CROPS,
      body: entity,
    });
  }
  static async update(id: string, entity: CropUpdateType): Promise<void> {
    await FetchService.put({
      url: `${API.CROPS}/${id}`,
      body: entity,
    });
  }
  static async delete(id: string): Promise<void> {
    await FetchService.delete({
      url: `${API.CROPS}/${id}`,
    });
  }
}

export default CropsService;
