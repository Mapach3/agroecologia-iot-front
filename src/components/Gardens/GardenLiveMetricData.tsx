import {
  Button,
  Card,
  Col,
  Collapse,
  Descriptions,
  Divider,
  message,
  Progress,
  Row,
  Spin,
  Switch,
} from "antd";
import CollapsePanel from "antd/lib/collapse/CollapsePanel";
import { DateTime } from "luxon";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import GardensService from "../../api/gardens/GardensService";
import { IGardenBasicInfo } from "../../api/gardens/models";
import { ISectorMetricData } from "../../api/sectors/models";
import { dateFormat } from "../../helpers/date-helper";
import { randomNumber } from "../../helpers/metric-helper";
import { GardenBasicInfoTestData } from "../../helpers/test-data-helper";
import ErrorPage from "../../pages/ErrorPage";
import BackButton from "../BackButton/BackButton";
import { GardenBasicInfo } from "./GardenBasicInfo";
import MetricCurrentData from "./MetricCurrentData";
import SectorMetricsGrid from "./SectorMetricsGrid";

const GardenLiveMetricData = () => {
  const [gardenBasicInfo, setGardenBasicInfo] = useState<IGardenBasicInfo>({
    name: "",
    description: "",
    gardenId: 1,
    location: "",
    sectorRangesBasicData: [],
  });

  const [basicInformationFetched, setBasicInformationFetched] = useState(false);

  const [sectorsMetricData, setSectorsMetricData] = useState<
    ISectorMetricData[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sectorsActiveKeys, setSectorActiveKeys] = useState<number[]>([]);

  const { id } = useParams<{ id: string }>();

  const getMetricTypeCurrentReading = (
    sectorId: number,
    metricTypeCode: string
  ) => {
    let sectorData = sectorsMetricData.find((smd) => smd.sectorId === sectorId);
    let reading =
      sectorData &&
      sectorData.readings.find(
        (r) => r.isCurrentReading && r.metricTypeCode === metricTypeCode
      );
    return reading;
  };

  const getSectorCurrentReadings = (sectorId: number) => {
    return sectorsMetricData.find((smd) => smd.sectorId === sectorId)
      ? sectorsMetricData.find((smd) => smd.sectorId === sectorId)!.readings
      : [];
  };

  useEffect(() => {
    setGardenBasicInfo(GardenBasicInfoTestData);
    setBasicInformationFetched(true);
  }, []);

  // //Initial fetch: only one time, when the view is rendered.
  // useEffect(() => {
  //   const fetchGardenBasicInfo = async () => {
  //     try {
  //       if (id) {
  //         setIsLoading(true);
  //         const response = await GardensService.fetchGardenBasicInfo(id);
  //         setGardenBasicInfo(response);
  //       }
  //     } catch (error) {
  //       setError(true);
  //       if (error.message) message.error(error.message);
  //     } finally {
  //     }
  //   };
  //   fetchGardenBasicInfo();
  // }, [id]);

  //Continous fetch: after basic info is loaded and then every x seconds
  useEffect(() => {
    const fetchSectorsMetricData = async () => {
      if (!error && basicInformationFetched) {
        const TestData: ISectorMetricData[] = [
          {
            sectorId: 1,
            sectorName: "Sector de Prueba",
            readings: [
              {
                metricReadingId: 1,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(10.25, 50.2).toString(),
                valueType: "string",
                metricTypeCode: "TEMPERATURA_AMBIENTE",
                metricTypeDescription: "Temperatura Ambiente",
                isCurrentReading: true,
              },
              {
                metricReadingId: 2,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(10.25, 20.1).toString(),
                valueType: "string",
                metricTypeCode: "HUMEDAD_SUELO",
                metricTypeDescription: "Humedad del suelo",
                isCurrentReading: true,
              },
              {
                metricReadingId: 3,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(1.8, 12.2).toString(),
                valueType: "string",
                metricTypeCode: "HUMEDAD_AMBIENTE",
                metricTypeDescription: "Humedad del Ambiente",
                isCurrentReading: true,
              },
              {
                metricReadingId: 4,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(1.8, 12.2).toString(),
                valueType: "string",
                metricTypeCode: "HUMEDAD_AMBIENTE",
                metricTypeDescription: "Humedad del Ambiente",
                isCurrentReading: false,
              },
              {
                metricReadingId: 5,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(1.8, 12.2).toString(),
                valueType: "string",
                metricTypeCode: "HUMEDAD_AMBIENTE",
                metricTypeDescription: "Humedad del Ambiente",
                isCurrentReading: false,
              },
            ],
          },
          {
            sectorId: 2,
            sectorName: "Sector de prueba 2",
            readings: [
              {
                metricReadingId: 7,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(10.25, 50.2).toString(),
                valueType: "string",
                metricTypeCode: "TEMPERATURA_AMBIENTE",
                metricTypeDescription: "Temperatura Ambiente",
                isCurrentReading: true,
              },
              {
                metricReadingId: 8,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(10.25, 20.1).toString(),
                valueType: "string",
                metricTypeCode: "HUMEDAD_SUELO",
                metricTypeDescription: "Humedad del suelo",
                isCurrentReading: true,
              },
              {
                metricReadingId: 9,
                readingDate: DateTime.now().toFormat(dateFormat),
                value: randomNumber(1.8, 12.2).toString(),
                valueType: "string",
                metricTypeCode: "HUMEDAD_AMBIENTE",
                metricTypeDescription: "Humedad del Ambiente",
                isCurrentReading: true,
              },
            ],
          },
          { sectorId: 3, sectorName: "Sector de prueba 3", readings: [] },
        ];

        // const response = await GardensService.fetchSectorsMetricData(id!);
        // setSectorsMetricData(response);
        setSectorsMetricData(TestData);
      }
    };

    const interval = setInterval(() => {
      fetchSectorsMetricData();
    }, 5000);
    return () => clearInterval(interval);
  }, [error, id, basicInformationFetched]);

  if (error) return <ErrorPage />;

  return (
    <div className="container">
      <Card title={<BackButton title="Huerta en vivo" />}>
        {isLoading ? (
          <div className="loading">
            <Spin />
          </div>
        ) : (
          <>
            <GardenBasicInfo garden={gardenBasicInfo} />
            <Divider>Sectores</Divider>
            {!gardenBasicInfo.sectorRangesBasicData.length ? (
              <span>La huerta no posee sectores</span>
            ) : (
              <>
                <Button
                  type="primary"
                  style={{ marginBottom: 15, marginRight: 15 }}
                  onClick={() =>
                    setSectorActiveKeys([
                      ...gardenBasicInfo.sectorRangesBasicData.map(
                        (srd) => srd.sectorId
                      ),
                    ])
                  }
                >
                  Mostrar todos
                </Button>
                <Button
                  type="primary"
                  style={{ marginBottom: 15 }}
                  onClick={() => setSectorActiveKeys([])}
                >
                  Ocultar todos
                </Button>

                <Collapse
                  activeKey={sectorsActiveKeys}
                  onChange={(activeKeys: any) =>
                    setSectorActiveKeys(activeKeys)
                  }
                >
                  {gardenBasicInfo.sectorRangesBasicData.map((sector) => (
                    <CollapsePanel
                      key={sector.sectorId}
                      header={sector.sectorName}
                    >
                      <Row
                        gutter={16}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {sector.sectorMetricRanges.map((range) => (
                          <React.Fragment key={range.metricTypeCode}>
                            <Col
                              xs={24}
                              sm={12}
                              md={6}
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: 10,
                              }}
                            >
                              <MetricCurrentData
                                sectorRange={range}
                                currentReading={getMetricTypeCurrentReading(
                                  sector.sectorId,
                                  range.metricTypeCode
                                )}
                              />
                            </Col>
                          </React.Fragment>
                        ))}
                      </Row>
                      <Divider>Historial de lecturas</Divider>
                      <SectorMetricsGrid
                        readings={getSectorCurrentReadings(sector.sectorId)}
                      />
                    </CollapsePanel>
                  ))}
                </Collapse>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default GardenLiveMetricData;
