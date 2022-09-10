import {
  Button,
  Card,
  Divider,
  Form,
  Input,
  message,
  Popconfirm,
  Spin,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CropsService from "../../api/crops/CropsService";
import { CropAddType, CropUpdateType, ICrop } from "../../api/crops/models";
import BackButton from "../BackButton/BackButton";

interface FormValues {
  name: string;
}

const formItemLayout = {
  wrapperCol: { xs: 24, sm: 24, md: 24, lg: 20 },
  labelCol: { xs: 24, sm: 24, md: 24, lg: 4 },
};

const CropDetail = () => {
  const [form] = useForm<FormValues>();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(!!id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [crop, setCrop] = useState<ICrop>();

  const handleDelete = async (id: string) => {
    try {
      setIsSubmitting(true);
      await CropsService.delete(id);
      message.success("Operación exitosa");
      navigate(-1);
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      setIsSubmitting(true);
      if (id) {
        const entity: CropUpdateType = {
          name: values.name,
          cropId: +id,
        };
        await CropsService.update(id, entity);
      } else {
        const entity: CropAddType = {
          name: values.name,
        };
        await CropsService.add(entity);
      }
      message.success("Operación exitosa");
      navigate(-1);
    } catch (error) {
      if (error.message) message.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const fetchCrop = async () => {
      if (id) {
        try {
          const response = await CropsService.fetchOne(id);
          setCrop(response);
        } catch (error) {
          if (error.message) message.error(error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchCrop();
  }, [id]);

  return (
    <div className="container">
      <Card title={<BackButton title="Cultivo" />}>
        {isLoading ? (
          <div className="loading">
            <Spin />
          </div>
        ) : (
          <Form
            form={form}
            onFinish={(values) => handleSubmit(values)}
            layout="horizontal"
            {...formItemLayout}
          >
            <Form.Item
              name="name"
              label="Nombre"
              initialValue={crop?.name || undefined}
              rules={[{ required: true, message: "Complete este campo" }]}
            >
              <Input />
            </Form.Item>

            <Divider />
            {!!id && (
              <Popconfirm
                title="¿Eliminar Cultivo? Se eliminará también de los sectores asociados"
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
              type="primary"
              style={{ float: "right" }}
              loading={isSubmitting}
            >
              Guardar
            </Button>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default CropDetail;
