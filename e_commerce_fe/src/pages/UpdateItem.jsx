import React, {useEffect, useState} from "react";
import axios from "axios";
import {Form, Input, PageHeader, Button, Avatar, Select, Switch, Image, Col, Row} from 'antd';
import {Option} from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import {useNavigate , useParams} from "react-router-dom";

const UpdateItem = () => {

    const hostURL = "http://20.78.251.90:5000";

    const  navigate = useNavigate ();
    const params = useParams();
    const itemId = params.item_id;
    const Option = Select.Option;

    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState("in");
    const [check, setCheck] = useState();
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState(undefined)
    const [categories, setCategories] = useState([])
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
        getItem();
        getAllCategories();

        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
        setImage(e.target.files[0])
    }

    const getAllCategories = () => {
        const url = hostURL+"/item/categories";
        axios.get(url).then(async (res) => {

            await setCategories(res.data.categories);
        })
    }

    const getItem = async () => {
        const url = hostURL+"/item/" + itemId;
        await axios.get(url).then(async (res) => {
            const item = res.data.item;
            console.log(item)
            await setCategory(item.category);
            await setTitle(item.title);
            await setPrice(item.price);
            await setQuantity(item.quantity);
            await setDescription(item.description);
            if (preview === undefined){
                await setPreview(hostURL+"/uploads/images/" + item.image);
            }
            if(item.status === "in"){
                setCheck(true);
            }
            else{
                setCheck(false)
            }
            setIsLoading(false);
        })
    }

    const onDeleteItem = () => {
        const url = hostURL+"/item/delete/" + itemId;
        axios.delete(url).then(async (res) => {

            navigate(-1);
        })
    }

    const onCategorySelect = (value) => {
        setCategory(value);
    }

    function onStatusChange(checked) {

        if(checked === false){
            setStatus('Out');
            setCheck(false);
        }
        else{
            setStatus('In');
            setCheck(true);
        }
    }

    const onFinish = (e) => {

        e.preventDefault()
        const formData = new FormData();
        formData.append("title",title);
        formData.append("category",category._id);
        formData.append("description",description);
        formData.append("quantity",quantity);
        formData.append("price",price);
        formData.append("image",image);
        formData.append("status",status);

        const url = hostURL+"/item/update/" + itemId;
        axios.put(url, formData).then((res) => {
            console.log(res)
            if(res.data.status === 200){
                navigate(-1);
            }
            else{
                alert("Something went wrong");
            }
        })
    };
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return(
        <div className="center">
            <Row style={{padding: 10, width: 600}}>
                <Col style={{width: 500}}>
                    <Image
                        width={300}
                        src={preview}
                    />

                    <input type="file" onChange={onSelectFile}/>
                </Col>
                <Col style={{width: 500}}>
                    <Form  onFinish={onFinish} >

                        <Form.Item>
                            <Input required={true} value={title} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
                        </Form.Item>

                        <Form.Item>
                            <Select
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Please select item category"
                                onChange={onCategorySelect}
                                defaultValue={category.category}
                            >
                                {categories.map(item => (
                                    <Option value={item} key={item._id}>{item.category}</Option>
                                ))}

                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Input required={true} value={price} placeholder="Price" onChange={(e) => {setPrice(e.target.value)}} />
                        </Form.Item>

                        <Form.Item>
                            <Input type="number" value={quantity} required={true} placeholder="Quantity" onChange={(e) => {setQuantity(e.target.value)}} />
                        </Form.Item>

                        <Form.Item>
                            <TextArea  required={true} value={description} placeholder="Description" onChange={(e) => {setDescription(e.target.value)}} />
                        </Form.Item>

                        <p>Stock status:  {status} </p>,<Switch checked={check} defaultChecked onChange={onStatusChange}/>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
                            <Button>
                                Cancel
                            </Button>
                            <Button onClick={onFinish} style={{marginLeft:'10px'}} type="primary" htmlType="submit">
                                Update
                            </Button>
                            <Button onClick={onDeleteItem} style={{marginLeft:'10px'}} type="danger" htmlType="submit">
                                Remove
                            </Button>
                        </Form.Item>

                    </Form>
                </Col>
            </Row>
        </div>
    )

}

export default UpdateItem;