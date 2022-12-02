import { IGardenBasicInfo } from "../api/gardens/models";
import {
  IMetricAcceptationRange,
  IMetricAcceptationRangeGarden,
} from "../api/metricAcceptationRanges/models";
import { IMetricType } from "../api/metricTypes/models";
import {
  ISectorBasicData,
  ISectorMetricData,
  ISectorRange,
} from "../api/sectors/models";

export const MetricAcceptationRangesData: IMetricAcceptationRange[] = [
  {
    metricAcceptationRangeId: 1,
    name: "Rango 1",
    startValue: 35.2,
    endValue: 35.2,
    metricTypeCode: "HUMEDAD_AMBIENTE",
    metricTypeDescription: "Humedad del ambiente",
  },
  {
    metricAcceptationRangeId: 2,
    name: "Rango 2",
    startValue: 10.149,
    endValue: 10,
    metricTypeCode: "HUMEDAD_SUELO",
    metricTypeDescription: "Humedad del suelo",
  },
  {
    metricAcceptationRangeId: 3,
    name: "Rango 3",
    startValue: 25.1,
    endValue: 35.4,
    metricTypeCode: "TEMPERATURA_AMBIENTE",
    metricTypeDescription: "Temperatura ambiente",
  },
  {
    metricAcceptationRangeId: 4,
    name: "Rango 4",
    startValue: 15,
    endValue: 20,
    metricTypeCode: "HUMEDAD_AMBIENTE",
    metricTypeDescription: "Humedad del ambiente",
  },
  {
    metricAcceptationRangeId: 5,
    name: "Rango 5",
    startValue: 35,
    endValue: 37,
    metricTypeCode: "TEMPERATURA_AMBIENTE",
    metricTypeDescription: "Temperatura ambiente",
  },
];

export const MetricTypesData: IMetricType[] = [
  { code: "TEMPERATURA_AMBIENTE", description: "Temperatura Ambiente" },
  { code: "HUMEDAD_SUELO", description: "Humedad del suelo" },
  { code: "HUMEDAD_AMBIENTE", description: "Humedad Ambiente" },
];

export const MetricAcceptationRangesGardenData: IMetricAcceptationRangeGarden[] =
  [
    {
      metricAcceptationRangeId: 1,
      name: "Temperatura Ambiente - Calabazas",
      metricTypeCode: "TEMPERATURA_AMBIENTE",
      metricTypeDescription: "Temperatura Ambiente",
    },

    {
      metricAcceptationRangeId: 2,
      name: "Humedad suelo calabazas",
      metricTypeCode: "HUMEDAD_SUELO",
      metricTypeDescription: "Humedad del Suelo",
    },

    {
      metricAcceptationRangeId: 3,
      name: "Humedad del Ambiente - Calabazas",
      metricTypeCode: "HUMEDAD_AMBIENTE",
      metricTypeDescription: "Humedad del Ambiente",
    },
    {
      metricAcceptationRangeId: 4,
      name: "Temperatura Ambiente - Pernos",
      metricTypeCode: "TEMPERATURA_AMBIENTE",
      metricTypeDescription: "Temperatura Ambiente",
    },

    {
      metricAcceptationRangeId: 5,
      name: "Humedad suelo - Frutas tropicales",
      metricTypeCode: "HUMEDAD_SUELO",
      metricTypeDescription: "Humedad del Suelo",
    },

    {
      metricAcceptationRangeId: 6,
      name: "Humedad del Ambiente - Agua de coco",
      metricTypeCode: "HUMEDAD_AMBIENTE",
      metricTypeDescription: "Humedad del Ambiente",
    },
    {
      metricAcceptationRangeId: 7,
      name: "Temperatura Ambiente - Bananas",
      metricTypeCode: "TEMPERATURA_AMBIENTE",
      metricTypeDescription: "Temperatura Ambiente",
    },

    {
      metricAcceptationRangeId: 8,
      name: "Humedad suelo - Frambuesas",
      metricTypeCode: "HUMEDAD_SUELO",
      metricTypeDescription: "Humedad del Suelo",
    },

    {
      metricAcceptationRangeId: 9,
      name: "Humedad del Ambiente - Moras",
      metricTypeCode: "HUMEDAD_AMBIENTE",
      metricTypeDescription: "Humedad del Ambiente",
    },
  ];

export const SectorRangesTestData: ISectorRange[] = [
  {
    metricTypeDescription: "Temperatura Ambiente",
    metricTypeCode: "TEMPERATURA_AMBIENTE",
    startValue: 10.1,
    endValue: 10.9,
  },
  {
    metricTypeDescription: "Humedad del Suelo",
    metricTypeCode: "HUMEDAD_SUELO",
    startValue: 18,
    endValue: 22,
  },
  {
    metricTypeDescription: "Humedad del Ambiente",
    metricTypeCode: "HUMEDAD_AMBIENTE",
    startValue: 15.2,
    endValue: 16.9,
  },
];

export const SectorRangesTestData2: ISectorRange[] = [
  {
    metricTypeDescription: "Temperatura Ambiente",
    metricTypeCode: "TEMPERATURA_AMBIENTE",
    startValue: 1,
    endValue: 20,
  },
  {
    metricTypeDescription: "Humedad del Suelo",
    metricTypeCode: "HUMEDAD_SUELO",
    startValue: 20,
    endValue: 100,
  },
  {
    metricTypeDescription: "Humedad del Ambiente",
    metricTypeCode: "HUMEDAD_AMBIENTE",
    startValue: 25,
    endValue: 50,
  },
];

export const SectorRangesTestData3: ISectorRange[] = [
  {
    metricTypeDescription: "Temperatura Ambiente",
    metricTypeCode: "TEMPERATURA_AMBIENTE",
    startValue: 20.22,
    endValue: 10.5,
  },
  {
    metricTypeDescription: "Humedad del Suelo",
    metricTypeCode: "HUMEDAD_SUELO",
    startValue: 1,
    endValue: 50,
  },
  {
    metricTypeDescription: "Humedad del Ambiente",
    metricTypeCode: "HUMEDAD_AMBIENTE",
    startValue: 30,
    endValue: 40,
  },
];

export const GardenBasicInfoSectorRangesTestData: ISectorBasicData[] = [
  {
    sectorId: 1,
    sectorName: "Sector de prueba 1",
    sectorRanges: [...SectorRangesTestData],
  },
  {
    sectorId: 2,
    sectorName: "Sector de prueba 2",
    sectorRanges: [...SectorRangesTestData2],
  },
  {
    sectorId: 3,
    sectorName: "Sector de prueba 3",
    sectorRanges: [...SectorRangesTestData3],
  },
];

export const GardenBasicInfoTestData: IGardenBasicInfo = {
  gardenId: 1,
  title: "Huerta de prueba en vivo",
  description: "Descripción de la huerta de prueba en vivo",
  location: "29 de Septiembre 1928, Buenos Aires, Argentina",
  sectorRangesData: GardenBasicInfoSectorRangesTestData,
};
