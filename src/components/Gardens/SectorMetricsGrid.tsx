import { Col, Table } from "antd";
import { ColumnType } from "antd/lib/table";
import { IMetricReadingDTO } from "../../api/metricReadings/models";
import { formatMetricValueWithUnit } from "../../helpers/metric-helper";

interface Props {
  readings: IMetricReadingDTO[];
}

const SectorMetricsGrid: React.FC<Props> = ({ readings }) => {
  const columns: ColumnType<IMetricReadingDTO>[] = [
    {
      title: "Tipo de métrica",
      dataIndex: "metricTypeDescription",
      responsive: ["sm", "md"],
    },
    {
      title: "Valor",
      dataIndex: "value",
      render: (cell: any, row: IMetricReadingDTO) =>
        formatMetricValueWithUnit(+row.value, row.metricTypeCode),
      responsive: ["sm", "md"],
    },
    {
      title: "Fecha de captura",
      dataIndex: "readingDate",
      responsive: ["sm", "md"],
    },
    {
      title: "Lecturas",
      render: (cell: any, row: IMetricReadingDTO) => (
        <>
          <p>{row.metricTypeDescription}</p>
          <p>{formatMetricValueWithUnit(+row.value, row.metricTypeCode)}</p>
          <p>{row.readingDate}</p>
        </>
      ),
      responsive: ["xs"],
    },
  ];

  return (
    <Table
      rowKey="metricReadingId"
      bordered
      dataSource={readings}
      size="small"
      columns={columns}
      scroll={{ x: "max-content" }}
    />
  );
};

export default SectorMetricsGrid;
