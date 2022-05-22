import React, { Component } from 'react'
import { Form, Input, InputNumber, Button, Typography, notification } from 'antd';
import { CreditCardOutlined } from '@ant-design/icons';
import axios from "axios";
import baseUrls from "../CommonUtil";

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
        console.log(JSON.parse(localStorage.getItem('Contact')));
        console.log(JSON.parse(localStorage.getItem('Contact1')));
        console.log(localStorage.getItem('Contact1'));
        console.log(localStorage.getItem('test1'));
        const url = baseUrls.paymentBaseURL+"/card/add-card";
        values.Card.user = "6280c731a19182e2e52afc75" 
        axios.post(url, values.Card).then((res) => {
            console.log(res)
            if(res.data.status === 201){
                localStorage.setItem('Card', JSON.stringify(res.data.card));
                notification.open({
                  message: 'Card Details',
                  description:
                    'Your Payment Details Are Recorded Successfully.',
                  icon: <CreditCardOutlined style={{ color: '#108ee9' }} />,
                });
                this.props.moveToNextFunction();
            }
            else{
                alert("Something went wrong");
            }
        })
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
