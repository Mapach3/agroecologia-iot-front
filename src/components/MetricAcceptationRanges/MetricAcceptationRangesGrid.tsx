import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, message, Popconfirm, Table, Tag, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MetricAcceptationRangesService from "../../api/metricAcceptationRanges/MetricAcceptationRangesService";
import { IMetricAcceptationRange } from "../../api/metricAcceptationRanges/models";
import { PaginatedList } from "../../api/shared/models";
import { URLs } from "../../config/enums";
import {
  createBaseGridParams,
  GridParams,
  ROWS_PER_PAGE,
} from "../../helpers/grid-helper";
import { formatMetricValueWithUnit } from "../../helpers/metric-helper";
import { MetricAcceptationRangesData } from "../../helpers/test-data-helper";

const MetricAcceptationRangesGrid: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [gridState, setGridState] = useState<GridParams>(
    createBaseGridParams({ sortField: "createdAt" })
  );

  const navigate = useNavigate();

  const [rangesFetched, setRangesFetched] = useState<
    PaginatedList<IMetricAcceptationRange>
  >({
    list: MetricAcceptationRangesData,
    count: MetricAcceptationRangesData.length,
  });

  const columns = [
    { title: "Nombre", dataIndex: "name" },
    {
      title: "Valor inicial",
      align: "center" as "center",
      dataIndex: "startValue",
      render: (cell: number, row: IMetricAcceptationRange) =>
        formatMetricValueWithUnit(cell, row.metricTypeCode),
    },
    {
      title: "Valor final",
      align: "center" as "center",
      dataIndex: "endValue",
      render: (cell: number, row: IMetricAcceptationRange) =>
        formatMetricValueWithUnit(cell, row.metricTypeCode),
    },

    {
      title: "Fecha de creación",
      dataIndex: "createdAt",
    },
    {
      title: "Tipo de métrica",
      dataIndex: "metricTypeDescription",
      render: (cell: any) => <Tag>{cell}</Tag>,
    },
    {
      title: "Acciones",
      width: 120,
      render: (cell: any, row: IMetricAcceptationRange) => (
        <>
          <Tooltip title="Editar">
            <Button
              style={{ marginRight: 10 }}
              type="default"
              icon={<EditOutlined />}
              onClick={() =>
                navigate(
                  `${URLs.METRIC_ACCEPTATION_RANGES}${URLs.DETAIL.replace(
                    ":id",
                    row.metricAcceptationRangeId.toString()
                  )}`
                )
              }
            />
          </Tooltip>
          <Tooltip title="Eliminar">
            <Popconfirm
              placement="right"
              cancelText="Cancelar"
              title="¿Eliminar Rango de métrica?"
              onConfirm={() =>
                handleDelete(row.metricAcceptationRangeId.toString())
              }
              cancelButtonProps={{ loading: isLoading }}
            >
              <Button danger type="primary" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </>
      ),
    },
  ];

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      await MetricAcceptationRangesService.delete(id);
      message.success("Operación exitosa");
      setGridState({ ...gridState });
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchMetricAcceptationRanges = async () => {
      try {
        setIsLoading(true);
        const response = await MetricAcceptationRangesService.fetchList(
          gridState
        );
        setRangesFetched(response);
      } catch (error) {
        if (error.message) message.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMetricAcceptationRanges();
  }, [gridState]);

  return (
    <div className="container">
      <Card
        title={
          <>
            <span>Rangos de métrica</span>
            <Tooltip title="Añadir">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                shape="circle"
                style={{ float: "right" }}
                onClick={() =>
                  navigate(`${URLs.METRIC_ACCEPTATION_RANGES}${URLs.NEW}`)
                }
              />
            </Tooltip>
          </>
        }
      >
        <Table
          rowKey="metricAcceptationRangeId"
          loading={isLoading}
          dataSource={rangesFetched.list}
          columns={columns}
          bordered
          pagination={{ pageSize: ROWS_PER_PAGE, hideOnSinglePage: true }}
          scroll={{ x: 1024 }}
        />
      </Card>
    </div>
  );
};

export default MetricAcceptationRangesGrid;
