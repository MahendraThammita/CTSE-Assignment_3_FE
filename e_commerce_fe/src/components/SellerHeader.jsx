import React, {useEffect, useState} from "react";
import { PageHeader, Button, Descriptions } from 'antd';
import {useNavigate , useParams} from "react-router-dom";

const SellerHeader = () => {

    const  navigate = useNavigate ();

    const onAddItem = () => {
        navigate("/add_item")
    }

    return(
        <div>
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="My Shop"
                    subTitle="Manage Your Shop "
                    extra={[
                        <Button onClick={onAddItem} key="1" type="primary">
                            Add New Item
                        </Button>,
                    ]}
                >
                    {/*<Descriptions size="small" column={3}>*/}
                    {/*    <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>*/}
                    {/*    <Descriptions.Item label="Association">*/}
                    {/*        <a>421421</a>*/}
                    {/*    </Descriptions.Item>*/}
                    {/*    <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>*/}
                    {/*    <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>*/}
                    {/*    <Descriptions.Item label="Remarks">*/}
                    {/*        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China*/}
                    {/*    </Descriptions.Item>*/}
                    {/*</Descriptions>*/}
                </PageHeader>
            </div>
        </div>
    )

}

export default SellerHeader;