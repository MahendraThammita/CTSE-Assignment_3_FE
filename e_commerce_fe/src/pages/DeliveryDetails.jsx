import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, Typography } from 'antd';

const { Title } = Typography;

export default class DeliveryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
  render() {
    const layout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 12,
        },
      };
    const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };  

      const onFinish = (values) => {
        console.log(values);
      };
    
    return (
      <div>
          <div style={{textAlign: 'center', paddingBottom: 10}}>
            <Title>Shipping Details</Title>
          </div>
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['Contact', 'Name']} label="Name" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['Contact', 'Address_line_1']} label="Address Line 1" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name={['Contact', 'Address_line_2']} label="Address Line 2" >
                <Input />
            </Form.Item>
            <Form.Item label="State" style={{ marginBottom: 0 }}>
                <Form.Item name={['Contact', 'state']} rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}>
                    <Input placeholder="State" />
                </Form.Item>
                <Form.Item name={['Contact', 'city']} rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}>
                    <Input placeholder="City" />
                </Form.Item>
            </Form.Item>
            <Form.Item name={['Contact', 'zip_code']} label="Zip Code" rules={[{ required: true }]}>
                <InputNumber />
            </Form.Item>
            <Form.Item name={['Contact', 'phone']} label="Phone Number" >
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.labelCol, offset: 5 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
          </Form>
      </div>
    )
  }
}
