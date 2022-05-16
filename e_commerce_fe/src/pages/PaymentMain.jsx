import React, { Component } from 'react'
import PaymentHeader from "../components/PaymentHeader";
import DeliveryDetails from "../pages/DeliveryDetails";
import PaymentDetails from "../pages/PaymentDetails";
import { Layout, Row, Col, Steps, Button, message  } from 'antd';

const { Content} = Layout;
const { Step } = Steps;

export default class PaymentMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
        this.moveToNext = this.moveToNext.bind(this);
        this.moveToBack = this.moveToBack.bind(this);
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
          content: 'Payment Summary',
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
                                Content
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
