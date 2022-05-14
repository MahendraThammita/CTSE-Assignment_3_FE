import React, {useEffect, useState} from "react";
import axios from "axios";
import { Form, Input, PageHeader , Button, Avatar, Select, Switch   } from 'antd';

const Item = () => {

    const [category, setCategory] = useState();
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [quantity, setQuantity] = useState();
    const [price, setPrice] = useState();
    const [status, setStatus] = useState("in");
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    useEffect(() => {
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

    const onFinish = (e) => {

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
               alert("Item Added")
            }
            else{
                alert("Something went wrong");
            }
        })
    };

    return(
        <div>
            <div className="uditha-dashboard-align">
            <Avatar className="uditha-avatar-align"
                    size={80}
                    src={preview}
            />

            <input  style={{marginTop:'25px'}} type="file" onChange={onSelectFile}/>
        </div>

    <Form style={{marginLeft:'20%'}} {...layout}  onFinish={onFinish} >

        <Form.Item>
            <Input required={true} placeholder="Title" onChange={(e) => {setTitle(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Input required={true} placeholder="Category" onChange={(e) => {setCategory(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Input type='email' required={true} placeholder="Email" onChange={(e) => {setDescription(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Input required={true} placeholder="Mobile Number" onChange={(e) => {setPrice(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Input required={true} placeholder="Username" onChange={(e) => {setQuantity(e.target.value)}} />
        </Form.Item>

        <Form.Item>
            <Input required={true} placeholder="Password" type={"password"} onChange={(e) => {setStatus(e.target.value)}} />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 3 }}>
            <Button type="primary" htmlType="submit">
                Save
            </Button>
            <Button onClick={onFinish} style={{marginLeft:'10px'}} type="primary" htmlType="submit">
                Submit schedule
            </Button>
        </Form.Item>

    </Form>
        </div>
    )

}

export default Item;