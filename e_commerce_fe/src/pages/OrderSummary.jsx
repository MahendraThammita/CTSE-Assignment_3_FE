import React, { Component } from 'react'
import { Typography, Row, Col, Card, Button,notification } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import axios from "axios";
import baseUrls from "../CommonUtil";
import {useNavigate , useParams} from "react-router-dom";
const { Title, Text } = Typography;
const { Meta } = Card;


export default class OrderSummary extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.makePayment = this.makePayment.bind(this);
    }
    
    makePayment = () => {
        notification.open({
                      message: 'Order Created Successfully',
                      description:
                        'Your Order is Created Successfully.',
                      icon: <MailOutlined style={{ color: '#108ee9' }} />,
                    });
                    window.location.replace("/")
        // console.log("Make Payment called")
        // var payment = localStorage.getItem("Card");
        // var address = localStorage.getItem("Contact");
        // console.log("Card : " + payment)
        // console.log("address : " + address)

        // const url = baseUrls.paymentBaseURL+"/order/create-order";

        // const orderData = new FormData();
        // orderData.append("status",1);
        // orderData.append("payment","6280c731a19182e2e52afc75");
        // orderData.append("address",address);
        // orderData.append("user","6280c731a19182e2e52afc75");
        // console.log(orderData)
        // //values.Contact.user = "6280c731a19182e2e52afc75" 
        // axios.post(url, orderData).then((res) => {
        //     console.log(res)
        //     if(res.data.status === 201){
        //         notification.open({
        //           message: 'Order Created Successfully',
        //           description:
        //             'Your Dilivery Details Are Recorded Successfully.',
        //           icon: <MailOutlined style={{ color: '#108ee9' }} />,
        //         });
        //     }
        //     else{
        //         alert("Something went wrong");
        //     }
        // })
    };
  render() {
    //const card = JSON.parse(localStorage.getItem('Card'));
    return (
      <div>
        <Row>
            <Col span={4}>
            </Col>
            <Col span={16}>
                <Card bordered={false} style={{ marginBottom: 30 }}>
                    <div className='card-header-area'>
                        <Title level={2} style={{padding: 2, margin: 2}}>Order Summary</Title>
                        <Title level={4} type="secondary" style={{padding: 2, margin: 2}}>Confirm Your Order Here</Title>
                    </div>
                    <Row className='order-summary-row'>
                        <Col span={10} offset = {2}>
                            <Text strong type="secondary">Customer Name </Text>
                        </Col>
                        <Col span={6} offset = {4} className='order-summary-right'>
                            <Text strong>{JSON.parse(localStorage.getItem('Contact')).Name}</Text>
                        </Col>
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={10} offset = {2}>
                            <Text strong type="secondary">Shipping Address</Text>
                        </Col>
                        <Col span={7} offset = {3} className='order-summary-right'>
                            <Text strong>{JSON.parse(localStorage.getItem('Contact')).Address_line_1}</Text><br/>
                            <Text strong>{JSON.parse(localStorage.getItem('Contact')).Address_line_2}</Text><br/>
                            <Text strong>{JSON.parse(localStorage.getItem('Contact')).state + " " + JSON.parse(localStorage.getItem('Contact')).city}</Text><br/>
                            <Text strong>{JSON.parse(localStorage.getItem('Contact')).zip_code}</Text>
                        </Col>
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={10} offset = {2}>
                            <Text strong type="secondary">Delivery Cost</Text>
                        </Col>
                        <Col span={7} offset = {3} className='order-summary-right'>
                            <Text strong>0.00 $</Text><br/>
                        </Col>
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={10} offset = {2}>
                            <Text strong type="secondary">Discount</Text>
                        </Col>
                        <Col span={7} offset = {3} className='order-summary-right'>
                            <Text strong>0.00 $</Text><br/>
                        </Col>
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={20} offset = {2}>
                            <div style={{ backgroundColor: 'grey', paddingTop: 12, paddingBottom: 8 }}>
                                <Row style={{padding:0}}>
                                    <Col span={10} offset = {2}>
                                        <Title strong type="secondary" level={4}>Total Payment</Title>
                                    </Col>
                                    <Col span={7} offset = {3} className='order-summary-right' >
                                        <Title strong  level={4}>{this.props.totalPayment}.00 $</Title>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={20} offset = {2}>
                            <Button type="primary" block size={'large'} onClick={this.makePayment}>
                                <Title level={5}>Confirm Payment</Title>
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col span={4}>
            </Col>
        </Row>
      </div>
    )
  }
}
