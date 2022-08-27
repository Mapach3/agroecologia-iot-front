import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  message,
  Popconfirm,
  Row,
  Select,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ICrop } from "../../api/crops/models";
import GardensService from "../../api/gardens/GardensService";
import {
  GardenAddType,
  GardenUpdateType,
  IGarden,
} from "../../api/gardens/models";
import { ISector } from "../../api/sectors/models";
import BackButton from "../BackButton/BackButton";
import cryptoRandomString from "crypto-random-string";

interface FormValues {
  name: string;
  description: string;
  location: string;
  sectors: ISector[];
}

const formItemLayout = {
  wrapperCol: { xs: 24, sm: 24, md: 24, lg: 20 },
  labelCol: { xs: 24, sm: 24, md: 24, lg: 4 },
};

const GardenDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [form] = useForm<FormValues>();
  const [isLoading, setIsLoading] = useState(!!id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const [garden, setGarden] = useState<IGarden>({
    gardenId: 0,
    location: "",
    description: "",
    sectors: [],
    ownerUserId: 0,
    name: "",
  });

  const [crops, setCrops] = useState<ICrop[]>([]);
  const [isLoadingCrops, setIsLoadingCrops] = useState(true);

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      setIsSubmitting(true);
      if (id) {
        const entity: GardenUpdateType = {
          gardenId: +id,
          name: values.name,
          description: values.description,
          location: values.location,
          sectors: values.sectors,
        };
        await GardensService.update(id, entity);
      } else {
        const entity: GardenAddType = {
          name: values.name,
          description: values.description,
          location: values.location,
          sectors: values.sectors,
        };
        await GardensService.add(entity);
      }
      message.success("Operación exitosa");
      navigate(-1);
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setIsSubmitting(true);
      await GardensService.delete(id);
      message.success("Operación exitosa");
      navigate(-1);
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchGarden = async () => {
      if (id) {
        try {
          const response = await GardensService.fetchOne(id);
          setGarden(response);
        } catch (error) {
          if (error.message) message.error(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchGarden();
  }, [id]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        setIsLoadingCrops(true);
        //const cropsResponse = await CropsService.fetch();
        //setCrops(cropsResponse);
        setIsLoadingCrops(false);
      } catch (error) {
        if (error.message) message.error(error.message);
      }
    };

    fetchCrops();
  }, []);

  return (
    <div className="container">
      <Card title={<BackButton title="Huerta" />} loading={isLoading}>
        <Form
          form={form}
          onFinish={(values: FormValues) => handleSubmit(values)}
          {...formItemLayout}
        >
          <Form.Item
            label="Nombre"
            name="name"
            rules={[{ required: true, message: "Complete este campo" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Descripción"
            name="description"
            rules={[{ required: true, message: "Complete este campo" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ubicación"
            name="location"
            rules={[{ required: true, message: "Complete este campo" }]}
          >
            <Input />
          </Form.Item>
          <Form.List name="sectors" initialValue={garden.sectors}>
            {(sectors, { add, remove }) => (
              <>
                {sectors.map((sector, index) => (
                  <>
                    <Divider>{`Sector ${(index += 1)}`}</Divider>
                    <Form.Item
                      label="Nombre"
                      key={`sectors[${index}].name`}
                      name={[sector.name, "name"]}
                      rules={[{ required: true, message: "Campo obligatorio" }]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Clave Centralizador"
                      key={`sectors[${index}].centralizerKey`}
                      name={[sector.name, "centralizerKey"]}
                      extra="Esta clave deberá ser programada en la placa de la huerta inteligente"
                      rules={[{ required: true, message: "Campo obligatorio" }]}
                      initialValue={
                        form.getFieldValue(sector.key) ||
                        cryptoRandomString({ length: 64 })
                      }
                    >
                      <Input disabled readOnly />
                    </Form.Item>
                    <Form.Item
                      label="Cultivos"
                      key={`sectors[${index}].cropIds`}
                      name={[sector.name, "cropIds"]}
                    >
                      <Select
                        optionFilterProp="children"
                        placeholder="Seleccione cultivos"
                        mode="multiple"
                      >
                        {crops.map((crop) => (
                          <Select.Option key={crop.cropId} value={crop.cropId}>
                            {crop.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Button
                      danger
                      shape="circle"
                      style={{ marginBottom: 10, width: 0 }}
                      loading={isSubmitting}
                      type="primary"
                      onClick={() => remove(sector.name)}
                      block
                      icon={<MinusOutlined />}
                    />
                  </>
                ))}

                <Row gutter={12} style={{ justifyContent: "center" }}>
                  <Col xs={24} md={12} lg={6}>
                    <Button
                      disabled={sectors.length >= 3}
                      loading={isSubmitting}
                      style={{ marginTop: 10 }}
                      type="primary"
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Añadir sector
                    </Button>
                  </Col>
                </Row>
              </>
            )}
          </Form.List>
          <Divider />
          <>
            {!!id && (
              <Popconfirm
                title="¿Eliminar Huerta?"
                onConfirm={() => handleDelete}
                cancelText="Cancelar"
              >
                <Button type="primary" danger loading={isSubmitting}>
                  Eliminar
                </Button>
              </Popconfirm>
            )}
            <Button
              htmlType="submit"
              loading={isSubmitting}
              type="primary"
              style={{ float: "right" }}
            >
              Guardar
            </Button>
          </>
        </Form>
      </Card>
    </div>
  );
};

export default GardenDetail;
