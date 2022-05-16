import React, { Component } from 'react'
import { Row, Col, Image, Typography  } from 'antd';
const { Text } = Typography;

export default class ItemPreviewCard extends Component {
  render() {
    return (
      <div className='item-preview-componant-row'>
          <hr/>
          <Row className='item-preview-componant-row'>
            <Col span={4} offset={1}>
                <Image style={{width:80}} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
            </Col>
            <Col span={10} offset={1}>
                <Text strong>Item Name</Text><br/>
                <Text type="secondary" strong>125.33 $</Text><br/>
                <Text type="secondary" strong>Quantity : 5</Text>
                
            </Col>
          </Row>
      </div>
    )
  }
}
