import React, {useEffect, useState} from "react";
import axios from "axios";
import {Row, Col, Slider, Card} from 'antd';
import Meta from "antd/es/card/Meta";
import {Link} from "react-router-dom";


const Shop = () => {

    const [items, setItems] = useState([]);
    const [item, setItem] = useState();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        document.body.style.backgroundColor = "whiteSmoke"
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
            <div className="grid-container">
            {
                items.map((item) =>
                    <Card
                    hoverable
                    style={{ width: 280, margin: 5, height: 350 }}
                    cover={  <Link to ={`update_item/${item._id}`}> <img width={280} height={250} alt="example" src={"http://localhost:8080/uploads/images/" + item.image}/>
                        </Link>}
                >
                    <Meta title={item.title} description={item.price} />
                </Card>)
            }
            </div>

        </div>
    )

}

export default Shop;