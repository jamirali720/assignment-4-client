
import type { FormProps } from 'antd';
import { Button, Form, Input , message, Upload} from 'antd';
import type { UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



type FieldType = {
 name: string
  category: string
  description: string
  price: string;
  stock: string;
  quantity: string;
  brand: string;
  rating: string;
  image:string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const props: UploadProps = {
  name: 'file',
 
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Add = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="name"
      name="name"
      rules={[{ required: true, message: 'Please input your name!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="category"
      name="category"
      rules={[{ required: true, message: 'Please input your category!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="description"
      name="description"
      rules={[{ required: true, message: 'Please input your description!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="price"
      name="price"
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="quantity"
      name="quantity"
      rules={[{ required: true, message: 'Please input your quantity!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="brand"
      name="brand"
      rules={[{ required: true, message: 'Please input your brand!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="image"
      name="image"
      rules={[{ required: true, message: 'Please input your image!' }]}
    >
        <Upload {...props}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    </Form.Item>

    
   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);


export default Add;