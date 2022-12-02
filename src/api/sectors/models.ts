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
  sectorRanges: ISectorRange[];
}

export interface ISectorRange {
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
