import React from "react";
import { PageHeader} from 'antd';

const PaymentHeader = () => {

    return(
        <div>
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Payment"
                    subTitle="This is a subtitle"
                >
                </PageHeader>
            </div>
        </div>
    )

}

export default PaymentHeader;