import React, { Component } from 'react'
import PaymentHeader from "../components/PaymentHeader";
import DeliveryDetails from "../pages/DeliveryDetails";
import PaymentDetails from "../pages/PaymentDetails";
import OrderSummary from "../pages/OrderSummary";
import ItemPreviewCard from "../pages/ItemPreviewCard";
import OrderSummaryDetails from "../pages/OrderSummaryDetails";
import { Layout, Row, Col, Steps, Button, message, Typography  } from 'antd';
import axios from "axios";
import baseUrls from "../CommonUtil";
const { Title } = Typography;
const { Content} = Layout;
const { Step } = Steps;

export default class PaymentMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            itemsArr: [],
            itemsIdArr:[],
            totalPayment: 0
        }
        this.moveToNext = this.moveToNext.bind(this);
        this.moveToBack = this.moveToBack.bind(this);
    }

    componentDidMount(){
        const url = baseUrls.cartBaseURL+"/get-cart-items/";
        let user = "6280c731a19182e2e52afc75";
        axios.get(url + user)
        .then((res) => {
            var totalPrice = 0;
            var cartItems = res.data.map(function(itemObj) {
                totalPrice = totalPrice + itemObj.price;
                return itemObj._id;
            });
            this.setState({itemsArr : res.data})
            this.setState({itemsIdArr : cartItems})
            this.setState({totalPayment : totalPrice})
            console.log(totalPrice)
        }).catch(err => {
            console.log(err)
        })



    }

    moveToNext = () => {
        let newCurrent = this.state.current + 1;
        this.setState({current:newCurrent});
    };

    moveToBack = () => {
        let newCurrent = this.state.current - 1;
        this.setState({current:newCurrent});
    };

  render() {
    const steps = [
        {
          title: 'Dilivary',
          content: <DeliveryDetails moveToNextFunction={this.moveToNext} moveToBackFunction={this.moveToBack}/>,
        },
        {
          title: 'Payment',
          content: <PaymentDetails moveToNextFunction={this.moveToNext} moveToBackFunction={this.moveToBack}/>,
        },
        {
          title: 'Confirmation',
          content: <OrderSummary/>
        },
      ];

    return (
      <div>
        <PaymentHeader/>
        <div className="site-page-header-ghost-wrapper">
            <Layout className="layout">
            <Content
                className="site-layout-background"
                style={{
                    margin: 0,
                    minHeight: 480,
                }}
                >
                    <Row>
                        <Col span={16} className="site-layout-content-left">
                            <div className="site-layout-content">
                                <Steps current={this.state.current}>
                                    {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                    ))}
                                </Steps>
                                    <div className="steps-content">
                                        {steps[this.state.current].content}
                                    </div>
                            </div>
                        </Col>
                        <Col span={8} className="site-layout-content-right">
                            <div className="site-layout-content">
                                <Title level={3}>Order Summary</Title>
                                <div>
                                    {
                                        this.state.itemsIdArr.map(function(id) {
                                            <ItemPreviewCard itmId={id}/>
                                        })
                                    }
                                    
                                    <ItemPreviewCard/>
                                    <ItemPreviewCard/>
                                    <hr/>
                                </div>
                                <div>
                                    <OrderSummaryDetails/>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Content>
        </Layout>
        </div>
        
      </div>
    )
  }
}
