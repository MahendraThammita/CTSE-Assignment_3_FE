import React, {useEffect, useState} from "react";
import axios from "axios";
import {Form, Input, PageHeader, Button, Avatar, Select, Switch, Image, Col, Row} from 'antd';
import {Option} from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";

const AddItem = () => {

    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState("in");
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [categories, setCategories] = useState([])

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    useEffect(() => {

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
        const url = "http://localhost:8080/item/categories";
        axios.get(url).then(async (res) => {

            await setCategories(res.data.categories);
            console.log(res)
        })
    }

    const onCategorySelect = (value) => {
        setCategory(value);
    }

    function onStatusChange(checked) {

        if(checked === false){
            setStatus('out');
        }
        else{
            setStatus('in');
        }
    }

    const onFinish = (e) => {

        e.preventDefault()
        const formData = new FormData();
        formData.append("title",title);
        formData.append("category",category);
        formData.append("description",description);
        formData.append("quantity",quantity);
        formData.append("price",price);
        formData.append("image",image);
        formData.append("status",status);

        const url = "http://localhost:8080/item/add";
        axios.post(url, formData).then((res) => {
            if(res.data.status === 201){
            }
            else{
                alert("Something went wrong");
            }
        })
    };

    return(
        <div>
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
            <Input required={true} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Select
                allowClear
                style={{ width: '100%' }}
                placeholder="Please select item category"
                onChange={onCategorySelect}
            >
                {categories.map(item => (
                    <Option value={item._id} key={item._id}>{item.category}</Option>
                ))}

            </Select>
        </Form.Item>

        <Form.Item>
            <Input required={true} placeholder="Price" onChange={(e) => {setPrice(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Input type="number" required={true} placeholder="Quantity" onChange={(e) => {setQuantity(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <TextArea  required={true} placeholder="Description" onChange={(e) => {setDescription(e.target.value)}} />
        </Form.Item>

        <p>Stock status:  {status} </p>,<Switch defaultChecked onChange={onStatusChange}/>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
            <Button type="danger" htmlType="submit">
                Cancel
            </Button>
            <Button onClick={onFinish} style={{marginLeft:'10px'}} type="primary" htmlType="submit">
                Add To Shop
            </Button>
        </Form.Item>

    </Form>
            </Col>
            </Row>
        </div>
    )

}

export default AddItem;