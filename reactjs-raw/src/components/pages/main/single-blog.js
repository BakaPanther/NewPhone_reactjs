import axios from "axios";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import notifyInfor from "../../items/noti_infor";
import notifyError from "../../items/noti_error";
import notifySuccess from "../../items/noti_success";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FaShoppingCart  } from "react-icons/fa";



function SingleBlog(props) {
    const [user, setUser] = useState(JSON.parse(Cookies.get('user')));
    const [modal, setModal] = useState(false);


    const addToCart = (id_chi_tiet) =>{
        axios.post('http://127.0.0.1:8000/api/khach-hang/gio-hang-them-moi',{
            khach_hang_id : user.id,
           chi_tiet_dien_thoai_id : id_chi_tiet,
           so_luong : 1
        })
        .then((response) => {
            notifySuccess('Thêm vào giỏ hàng thành công');
        })
        .catch((error) => {
        
        });
    }

    const handleAddToCart = (id) => {
        if(Cookies.get('accessToken') === undefined)
        {
            setModal(!modal)
        }
        else
        {
            addToCart(id);
        }

    };



    const handleYes = () => {
        notifyInfor('Đang chuyển hướng đến đăng nhập');
        setTimeout(() => {
          window.location.href = "/login";
        }, 1000);
    };

    const handleNo = () => {
        setModal(!modal)
    };

    return (
        <>        
        <Card style={{
            width: '20%',
            borderRadius: '10px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            margin: '10px',
            cursor: 'pointer',
            backgroundColor: '#fff', 
            color: '#333' 
        }}>
            <img
                alt="Sample"
                src={`http://localhost:8000/` + props.data.hinh_anh[0].duong_dan}
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                }}
            />
            <CardBody style={{ paddingBottom: '0' }}>
                <CardTitle tag="h3">
                    <NavLink to={`/product-details/${props.data.id}`} href="#" style={{ textDecoration: 'none', color: '#333' }}>{props.data.ten}</NavLink>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h4">
                    <NavLink to={`/product-details/${props.data.id}`} style={{ textDecoration: 'none', color: '#333' }}>{props.data.chi_tiet_dien_thoai[0].gia_ban}</NavLink>
                </CardSubtitle>
                <div className="d-flex justify-content-between align-items-center mt-3">
                <Button
                    onClick={() => handleAddToCart(props.data.chi_tiet_dien_thoai[0].id)}
                    style={{
                        backgroundColor: '#FFA500',
                        color: '#fff',
                        transition: '0.3s',
                        border: '1px solid #FFA500',
                        marginLeft: '48px'
                    }}
                    className="btnHoverEffect"
                >
                    <FaShoppingCart />
                </Button>
                <Button
                    style={{
                        backgroundColor: '#FFA500',
                        color: '#fff',
                        transition: '0.3s',
                        border: '1px solid #FFA500',
                        marginLeft: '10px' 
                    }}
                    className="btnHoverEffect"
                >
                    Mua ngay
                </Button>
            </div>
            </CardBody>
        </Card>
        {/* modal */}
        <Modal isOpen={modal} size="sm"  className="my-modal">
            <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
                Đăng nhập rồi mới thêm vào được khách yêu owii!!!
            </ModalBody>
            <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
                <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
                <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
            </ModalFooter>
        </Modal>
        </>
    )
}
export default SingleBlog;