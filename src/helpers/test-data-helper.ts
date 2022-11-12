import {
  IMetricAcceptationRange,
  IMetricAcceptationRangeGarden,
} from "../api/metricAcceptationRanges/models";
import { IMetricType } from "../api/metricTypes/models";

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
