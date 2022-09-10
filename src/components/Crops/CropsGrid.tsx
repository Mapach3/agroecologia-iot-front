import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card, message, Popconfirm, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CropsService from "../../api/crops/CropsService";
import { ICrop } from "../../api/crops/models";
import { PaginatedList } from "../../api/shared/models";
import { URLs } from "../../config/enums";
import { createBaseGridParams, ROWS_PER_PAGE } from "../../helpers/grid-helper";

const CropsGrid = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedCrops, setFetchedCrops] = useState<PaginatedList<ICrop>>({
    list: [],
    count: 0,
  });
  const navigate = useNavigate();

  const [gridState, setGridState] = useState(
    createBaseGridParams({ sortField: "createdAt" })
  );

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      await CropsService.delete(id);
      message.success("Operación exitosa");
      setGridState({ ...gridState });
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const columns = [
    { title: "Nombre", dataIndex: "name" },
    { title: "Fecha de creación", dataIndex: "createdAt" },
    {
      title: "Acciones",
      width: 120,
      render: (cell: any, row: ICrop) => (
        <>
          <Tooltip title="Editar">
            <Button
              style={{ marginRight: 10 }}
              type="default"
              icon={<EditOutlined />}
              onClick={() =>
                navigate(
                  `${URLs.CROPS}${URLs.DETAIL.replace(
                    ":id",
                    row.cropId.toString()
                  )}`
                )
              }
            ></Button>
          </Tooltip>
          <Tooltip title="Eliminar">
            <Popconfirm
              placement="right"
              cancelText="Cancelar"
              title="¿Eliminar Cultivo? Se eliminará también de los sectores asociados"
              onConfirm={() => handleDelete(row.cropId.toString())}
              cancelButtonProps={{ loading: isLoading }}
            >
              <Button danger type="primary" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </>
      ),
    },
  ];

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        setIsLoading(true);
        const response = await CropsService.fetchList(gridState);
        setFetchedCrops(response);
      } catch (error) {
        if (error.message) message.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCrops();
  }, [gridState]);

  return (
    <div className="container">
      <Card
        title={
          <>
            <span>Cultivos</span>
            <Tooltip title="Añadir">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                shape="circle"
                style={{ float: "right" }}
                onClick={() => navigate(`${URLs.CROPS}${URLs.NEW}`)}
              />
            </Tooltip>
          </>
        }
      >
        <Table
          rowKey="cropId"
          loading={isLoading}
          columns={columns}
          bordered
          dataSource={fetchedCrops.list}
          pagination={{ pageSize: ROWS_PER_PAGE, hideOnSinglePage: true }}
          scroll={{ x: 1024 }}
        />
      </Card>
    </div>
  );
};

export default CropsGrid;
