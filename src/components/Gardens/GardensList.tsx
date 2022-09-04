import { PlusOutlined } from "@ant-design/icons";
import { Button, Card, List, message, Spin, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import GardensService from "../../api/gardens/GardensService";
import { IGarden } from "../../api/gardens/models";
import { PaginatedList } from "../../api/shared/models";
import { URLs } from "../../config/enums";
import { createBaseGridParams, ROWS_PER_PAGE } from "../../helpers/grid-helper";
import GardenInfoCard from "./GardenInfoCard";

const GardensList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedGardens, setFetchedGardens] = useState<PaginatedList<IGarden>>({
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
      await GardensService.delete(id);
      message.success("Operación exitosa");
      setGridState({ ...gridState });
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchGardens = async () => {
      try {
        setIsLoading(true);
        // const response = await GardensService.fetch(gridState);
        setFetchedGardens({
          count: 4,
          list: [
            {
              gardenId: 1,
              name: "Huerta 1",
              description:
                "Una huerta random 1 con un texto extremadamente largo para manejarlo correctamente implementando algun tipo de manejo de cadenas de texto",
              location: "Avenida 29 de Septiembre 2213",
              ownerUserId: 1,
              sectors: [],
            },
            {
              gardenId: 2,
              name: "Huerta 2",
              description: "Una huerta random 2",
              location: "Avenida 29 de Septiembre 2213",
              ownerUserId: 1,
              sectors: [],
            },
            {
              gardenId: 3,
              name: "Huerta 3",
              description: "Una huerta random 2",
              location: "Avenida 29 de Septiembre 2213",
              ownerUserId: 1,
              sectors: [],
            },
            {
              gardenId: 4,
              name: "Huerta 4",
              description: "Una huerta random 4",
              location: "Avenida 29 de Septiembre 2213",
              ownerUserId: 1,
              sectors: [],
            },
            {
              gardenId: 5,
              name: "Huerta 5",
              description: "Una huerta random 5",
              location: "Avenida 29 de Septiembre 2213",
              ownerUserId: 1,
              sectors: [],
            },
          ],
        });
      } catch (error) {
        if (error.message) message.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGardens();
  }, []);

  return (
    <div className="container">
      <Card
        title={
          <>
            <span>Huertas</span>
            <Tooltip title="Añadir">
              <Button
                type="primary"
                icon={<PlusOutlined />}
                shape="circle"
                style={{ float: "right" }}
                onClick={() => navigate(`${URLs.GARDENS}${URLs.NEW}`)}
              />
            </Tooltip>
          </>
        }
      >
        {isLoading ? (
          <div className="loading">
            <Spin />
          </div>
        ) : (
          <List
            rowKey="gardenId"
            grid={{ gutter: 16 }}
            dataSource={fetchedGardens.list}
            pagination={{ pageSize: ROWS_PER_PAGE, hideOnSinglePage: true }}
            renderItem={(garden) => (
              <GardenInfoCard
                name={garden.name}
                description={garden.description}
                location={garden.location}
                handleDelete={() => handleDelete(garden.gardenId.toString())}
                handleEdit={() =>
                  navigate(
                    `${URLs.GARDENS}${URLs.DETAIL.replace(
                      ":id",
                      garden.gardenId.toString()
                    )}`
                  )
                }
              />
            )}
          />
        )}
      </Card>
    </div>
  );
};

export default GardensList;
