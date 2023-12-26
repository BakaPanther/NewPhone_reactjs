import axios from "axios";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import notifyInfor from "../../items/noti_infor";
import notifyError from "../../items/noti_error";
import notifySuccess from "../../items/noti_success";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink } from "react-router-dom";



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
            <div className="col-lg-4 col-md-6 col-12">
                <div className="shop-single-blog">
                    <img src={`http://localhost:8000/` + props.data.hinh_anh[0].duong_dan} alt="#" />
                    <div className="content">
                        <div className="title-price">
                            <a href="#" className="title" style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', textDecoration: 'none' }}>{props.data.ten}</a>
                            <a href="#" className="more-btn" style={{ fontWeight: 'bold', fontSize: '16px', color: '#f00' }} >{props.data.chi_tiet_dien_thoai[0].gia_ban}</a>
                        </div>
                        <div className="icons">
                            <NavLink to={`/product-details/${props.data.id}`} className="single-icon"><i className="fa fa-info" aria-hidden="true"></i></NavLink>||
                            <a href="#" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true"></i></a>||
                            <a  className="single-icon"><i className="ti-bag" onClick={() => handleAddToCart(props.data.chi_tiet_dien_thoai[0].id)}></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div>
            <div>
            <Modal isOpen={modal}  size="sm" className="my-modal">
                <ModalHeader>Tiêu đề Modal</ModalHeader>
                <ModalBody>
                    Nội dung của modal ở đây.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleYes}>Okey đi thôi!!</Button>{' '}
                    <Button color="secondary" onClick={handleNo}>Honggg</Button>
                </ModalFooter>
            </Modal>
        </div>
        </div>
        </>
    )
}
export default SingleBlog;