import React, {useEffect, useState} from "react";
import axios from "axios";
import {Row, Col, Slider, Card} from 'antd';
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";


const Shop = () => {

    const [items, setItems] = useState([]);
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);


    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    useEffect(() => {

        getAllItems();

    }, [])

    const onSelectFile = e => {

    }

    const getAllItems = () => {
        const url = "http://localhost:8080/item/shop/627a85d42c0f408a158cf788";
        axios.get(url).then(async (res) => {
            await setItems(res.data.items);
            await setIsLoading(false)
            await console.log(items)
        })
    }


    const onSelectItem = (e) => {

    };

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return(
        <div>
            {
                items.map((item) =>
                    <Link to ={`update_item/${item._id}`}>
                    <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={"http://localhost:8080/uploads/images/" + item.image}  />}
                >
                    <Meta title={item.title} description={item.price} />
                </Card>
                    </Link>)
            }

        </div>
    )

}

export default Shop;