import React, { Component } from 'react'
import { Row, Col, Image, Typography  } from 'antd';
import axios from "axios";
import baseUrls from "../CommonUtil";

const { Text } = Typography;


export default class ItemPreviewCard extends Component {
  constructor(props) {
    super(props);
    console.log("props is : " + this.props)
    this.state = {
        itemImage: '',
        itemName: '',
        itemNPrice: 0,
        itemId: this.props.itmId
    }
}

componentDidMount(){
    const url = baseUrls.itemBaseURL+"/item/" + this.props.itmId;
    this.setState({itemId:this.props.itmId});
    axios.get(url)
    .then((res) => {
        this.setState({itemName : res.data.item.title})
        this.setState({itemNPrice : res.data.item.price})
        this.setState({itemImage : res.data.item.image})
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
                <Image style={{width:90}} src={baseUrls.itemBaseURL+"/uploads/images/" + this.state.itemImage}/>
            </Col>
            <Col span={10} offset={1}>
                <Text strong>{this.state.itemName}</Text><br/>
                <Text strong>Unit Price : </Text>
                <Text type="secondary" strong>{this.state.itemNPrice}.00 $</Text><br/>
                <Text strong>Quantity : </Text>
                <Text type="secondary" strong> 1</Text><br/>
                <Text strong>Total Price : </Text>
                <Text type="secondary" strong> {this.state.itemNPrice}.00 $</Text>
            </Col>
          </Row>
      </div>
    )
  }
}
