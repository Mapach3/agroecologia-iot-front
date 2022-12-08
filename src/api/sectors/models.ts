import { IMetricReadingDTO } from "../metricReadings/models";

export interface ISector {
  sectorId: number;
  name: string;
  centralizerKey: string;
  gardenId: number;
  crops: string;
  metricAcceptationRangeIds: number[];
}

export interface ISectorBasicData {
  sectorId: number;
  sectorName: string;
  sectorMetricRanges: ISectorMetricRange[];
}

export interface ISectorMetricRange {
  startValue: number;
  endValue: number;
  metricTypeCode: string;
  metricTypeDescription: string;
}

export interface ISectorMetricData {
  sectorId: number;
  sectorName: string;
  readings: IMetricReadingDTO[];
}
