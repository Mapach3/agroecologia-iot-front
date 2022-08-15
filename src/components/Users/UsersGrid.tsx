import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Popconfirm, Spin, Table, Tag, Tooltip } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaginatedList } from "../../api/shared/models";
import { IUser } from "../../api/users/models";
import { URLs } from "../../config/enums";

const UsersGrid: React.FC = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [fetchedUsers, setFetchedUsers] = useState<PaginatedList<IUser>>({
    list: [
      {
        userId: 1,
        username: "doguidogui",
        password:
          "$2a$10$WhLO7aI6oqXxm.SY1lr8JezChmVWfM60PcuvXvRDQDa15oGKTE5CC",
        name: "Vance",
        surname: "Wilderman",
        email: "Sterling.Kovacek@yahoo.com",
        roleId: 1,
        roleName: "Administrador",
      },
      {
        userId: 2,
        username: "gardenmanager",
        password:
          "$2a$10$KEHzr20wkE86mngUo9XPcOzb0lNhZGZcon.d/rsZppe/3w1GpZgOO",
        name: "Garden",
        surname: "Manager",
        email: "garden.manager@yopmail.com",
        roleId: 2,
        roleName: "Gestor de Huertas",
      },
    ],
    count: 10,
  });

  const columns = [
    {
      title: "Nombre de usuario",
      dataIndex: "username",
    },
    { title: "Email", dataIndex: "email" },
    { title: "Fecha de creación", dataIndex: "createdDate" },
    {
      title: "Rol",
      dataIndex: "roleName",
      align: "center" as "center",
      render: (cell: any) => <Tag>{cell}</Tag>,
    },
    {
      title: "Acciones",
      align: "center" as "center",
      render: (cell: any, row: IUser) => (
        <div>
          <Tooltip title="Editar">
            <Button
              type="primary"
              icon={<EditOutlined />}
              style={{ marginRight: 10 }}
              onClick={() =>
                navigate(
                  `${URLs.USERS}${URLs.DETAIL.replace(
                    ":id",
                    row.userId.toString()
                  )}`
                )
              }
            />
          </Tooltip>
          <Tooltip title="Eliminar">
            <Popconfirm
              placement="right"
              cancelText="Cancelar"
              title="¿Eliminar Usuario?"
              onConfirm={() => alert("Eliminado")}
            >
              <Button danger type="primary" icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="container">
      <Card title="Usuarios">
        {isLoading ? (
          <div className="loading">
            <Spin />
          </div>
        ) : (
          <Table
            bordered
            rowKey="userId"
            columns={columns}
            dataSource={fetchedUsers.list}
            pagination={{
              pageSize: 10,
              hideOnSinglePage: true,
              showTotal: (total, range) =>
                `${range[0]} - ${range[1]} de ${total} resultados`,
            }}
            scroll={{ x: 1024 }}
          />
        )}
      </Card>
    </div>
  );
};

export default UsersGrid;
