import { Col, Table } from "antd";
import { IMetricReadingDTO } from "../../api/metricReadings/models";
import { formatMetricValueWithUnit } from "../../helpers/metric-helper";

interface Props {
  readings: IMetricReadingDTO[];
}

const SectorMetricsGrid: React.FC<Props> = ({ readings }) => {
  const columns = [
    {
      title: "Tipo de métrica",
      dataIndex: "metricTypeDescription",
    },
    {
      title: "Valor",
      dataIndex: "value",
      render: (cell: any, row: IMetricReadingDTO) =>
        formatMetricValueWithUnit(+row.value, row.metricTypeCode),
    },
    { title: "Fecha de captura", dataIndex: "readingDate" },
  ];

  return (
    <>
      <Col xs={0} sm={24}>
        <Table
          rowKey="metricReadingId"
          bordered
          dataSource={readings}
          size="small"
          columns={columns}
          scroll={{ x: "max-content" }}
        />
      </Col>
      <Col xs={24} sm={0}>
        <Table
          rowKey="metricReadingId"
          bordered
          dataSource={readings}
          size="small"
          columns={[
            {
              title: "Info de lecturas",
              render: (cell: any, row: IMetricReadingDTO) => (
                <>
                  <p>{row.metricTypeDescription}</p>
                  <p>
                    {formatMetricValueWithUnit(+row.value, row.metricTypeCode)}
                  </p>
                  <p>{row.readingDate}</p>
                </>
              ),
            },
          ]}
          scroll={{ x: "max-content" }}
        />
      </Col>
    </>
  );
};

export default SectorMetricsGrid;
