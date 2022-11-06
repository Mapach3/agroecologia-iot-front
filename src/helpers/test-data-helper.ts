import { IMetricAcceptationRange } from "../api/metricAcceptationRanges/models";

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
