import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, Typography } from 'antd';

const { Title } = Typography;
export default class PaymentDetails extends Component {
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
        this.props.moveToNextFunction();
      };
    return (
        <div>
        <div style={{textAlign: 'center', paddingBottom: 10}}>
          <Title>Payment Details</Title>
        </div>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
          <Form.Item name={['Card', 'cardHolderName']} label="Card Holder Name" rules={[{ required: true }]}>
              <Input />
          </Form.Item>
          <Form.Item name={['Card', 'cardNumber']} label="Card Number" rules={[{ required: true }]}>
              <InputNumber />
          </Form.Item>
          <Form.Item label="Expiry Date" style={{ marginBottom: 8 }}>
              <Form.Item name={['Card', 'expiryDate']} rules={[{ required: true }]} style={{width: 'calc(50% - 6px)' }}>
                  <Input/>
              </Form.Item>
          </Form.Item>
          <Form.Item label="CVV" style={{ marginBottom: 8 }}>
              <Form.Item name={['Card', 'cvvCode']} rules={[{ required: true }]} style={{width: 'calc(50% - 6px)' }}>
                  <Input/>
              </Form.Item>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.labelCol, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button style={{ margin: '0 8px' }} onClick={() => this.props.moveToBackFunction()}>
                Previous
              </Button>
          </Form.Item>
        </Form>
    </div>
    )
  }
}
