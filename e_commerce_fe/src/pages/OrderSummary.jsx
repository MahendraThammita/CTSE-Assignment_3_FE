import React, { Component } from 'react'
import { Typography, Row, Col, Card, Button } from 'antd';
const { Title, Text } = Typography;
const { Meta } = Card;
export default class OrderSummary extends Component {
  render() {
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
                            <Text strong>Customer Name Value</Text>
                        </Col>
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={10} offset = {2}>
                            <Text strong type="secondary">Shipping Address</Text>
                        </Col>
                        <Col span={7} offset = {3} className='order-summary-right'>
                            <Text strong>Address Line one</Text><br/>
                            <Text strong>Address Line two</Text><br/>
                            <Text strong>State, City</Text><br/>
                            <Text strong>Zip</Text>
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
                                        <Title strong  level={4}>0.00 $</Title>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        
                    </Row>
                    <Row className='order-summary-row'>
                        <Col span={20} offset = {2}>
                            <Button type="primary" block size={'large'}>
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
