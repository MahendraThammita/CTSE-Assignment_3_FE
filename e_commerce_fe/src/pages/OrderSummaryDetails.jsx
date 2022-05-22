import React, { Component } from 'react'
import { Row, Col, Image, Typography  } from 'antd';
const { Text,Title } = Typography;

export default class OrderSummaryDetails extends Component {
    
  render() {
    return (
      <div>
        <Row className='order-summary-row'>
            <Col span={10} offset = {2}>
                <Text strong type="secondary">Sub Total</Text>
            </Col>
            <Col span={6} offset = {4} className='order-summary-right'>
                <Text strong type="secondary">15.55 $</Text>
            </Col>
        </Row>
        <Row className='order-summary-row'>
            <Col span={10} offset = {2}>
                <Text strong type="secondary">Shipping Cost</Text>
            </Col>
            <Col span={6} offset = {4} className='order-summary-right'>
                <Text strong type="secondary">{this.props.totalPayment}.00 $</Text>
            </Col>
        </Row>
        <Row className='order-summary-row'>
            <Col span={10} offset = {2}>
                <Text strong type="secondary">Discounts</Text>
            </Col>
            <Col span={6} offset = {4} className='order-summary-right'>
                <Text strong type="secondary">0.00 $</Text>
            </Col>
        </Row>
        <Row className='order-summary-row'>
            <Col span={10} offset = {2}>
                <Title strong level={4}>Total</Title>
            </Col>
            <Col span={6} offset = {4} className='order-summary-right'>
                <Title strong level={4}>{this.props.totalPayment}.00 $</Title>
            </Col>
        </Row>
      </div>
    )
  }
}
