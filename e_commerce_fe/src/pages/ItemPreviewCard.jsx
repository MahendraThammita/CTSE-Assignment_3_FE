import React, { Component } from 'react'
import { Row, Col, Image, Typography  } from 'antd';
import axios from "axios";
import baseUrls from "../CommonUtil";

const { Text } = Typography;


export default class ItemPreviewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        itemImage: 0,
        itemName: '',
        itemNPrice: 0
    }
}

componentDidMount(){
    const url = baseUrls.itemBaseURL+"/item/" + this.props.itmId;
    axios.get(url)
    .then((res) => {
        
        // this.setState({itemsArr : res.data})
        // this.setState({itemsIdArr : cartItems})
        // this.setState({totalPayment : totalPrice})
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
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
