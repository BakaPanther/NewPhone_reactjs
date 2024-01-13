import axios from "axios";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from "react";
import notifyInfor from "../../items/noti_infor";
import notifyError from "../../items/noti_error";
import notifySuccess from "../../items/noti_success";
import ClipLoader from "react-spinners/ClipLoader";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { NavLink } from "react-router-dom";
import { FaShoppingCart  } from "react-icons/fa";




function SingleBlog(props) {
    //loader
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
    const addToWishList = (id_chi_tiet) =>{
        axios.post('http://127.0.0.1:8000/api/khach-hang/yeu-thich-them-moi',{
          khach_hang_id : user.id,
          chi_tiet_dien_thoai_id : id_chi_tiet,
        })
        .then((response) => {
            notifySuccess('Thêm vào yêu thích thành công');
        })
        .catch((error) => {
        
        });
      }
      
      const handleAddToWishList = (id) => {
        if(Cookies.get('accessToken') === undefined)
        {
            setModal(!modal)
        }
        else
        {
            addToWishList(id);
        }
      
      };
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

    useEffect(() => {
        if (props.data !== null) {
          setLoading(false);
        }
    }, [props.data]); // Chuyển props.data vào mảng dependencies để theo dõi sự thay đổi của nó
      
    console.log(" chi tiet ",props.data.chi_tiet_dien_thoai[0]);
    return (
        <>
        {(!loading) ? (
        <div className="col-4">       
        <Card style={{
            width: '75%',
            borderRadius: '10px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: '0.3s',
            margin: '10px',
            cursor: 'pointer',
            backgroundColor: '#fff', 
            color: '#333' 
        }}>
            {props && props.data && props.data.hinh_anh && props.data.hinh_anh[0] && props.data.hinh_anh[0].duong_dan && (
            <img
                alt="Sample"
                src={`http://localhost:8000/${props.data.hinh_anh[0].duong_dan}`}
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderTopLeftRadius: '10px',
                    borderTopRightRadius: '10px'
                }}
            />
            )}
            <CardBody style={{ paddingBottom: '0' }}>
                <CardTitle tag="h3">
                    <NavLink to={`/product-details/${props.data.id}`} href="#" style={{ textDecoration: 'none', color: '#333' }}>{props.data.ten}</NavLink>
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h4">
                   {props && props.data && props.data.chi_tiet_dien_thoai[0] && (
                    <NavLink to={`/product-details/${props.data.id}`} style={{ textDecoration: 'none', color: '#333' }}>{props.data.chi_tiet_dien_thoai[0].gia_ban}</NavLink>
                   )}
                </CardSubtitle>
                <div className="action-position-button" >
                <Button
                  style={{
                    backgroundColor: '#FFA500',
                    color: '#fff',
                    transition: '0.3s',
                    border: '1px solid #FFA500',
                    right: '105px',
                }}
                className="btnHoverEffect">So sánh</Button>
                {props && props.data && props.data.chi_tiet_dien_thoai[0] && (
                <Button
                    onClick={()=> handleAddToWishList(props.data.chi_tiet_dien_thoai[0].id)}
                  style={{
                    backgroundColor: '#FFA500',
                    color: '#fff',
                    transition: '0.3s',
                    border: '1px solid #FFA500',
                }}
                className="btnHoverEffect"><i className="ti-heart"></i></Button>)}
                
                {props && props.data && props.data.chi_tiet_dien_thoai[0] && (
                <Button
                    onClick={() => handleAddToCart(props.data.chi_tiet_dien_thoai[0].id)}
                    style={{
                        backgroundColor: '#FFA500',
                        color: '#fff',
                        transition: '0.3s',
                        border: '1px solid #FFA500',
                    }}
                    className="btnHoverEffect"
                >
                    <FaShoppingCart />
                </Button>
                
                  )}
            </div>
            </CardBody>
        </Card>
        <Modal isOpen={modal} size="sm"  className="my-modal">
            <ModalBody style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '20px', maxHeight: '100px', overflowY: 'auto' }}>
                Đăng nhập rồi mới thêm vào được khách yêu owii!!!
            </ModalBody>
            <ModalFooter style={{ backgroundColor: '#f8f9fa', borderRadius: '0 0 10px 10px', borderTop: 'none', padding: '0px' }}>
                <Button color="primary" style={{ backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', marginRight: '10px' }} onClick={handleYes}>Okey đi thôi!!</Button>
                <Button color="secondary" style={{ backgroundColor: '#6c757d', color: '#fff', borderRadius: '5px' }} onClick={handleNo}>Honggg</Button>
            </ModalFooter>
        </Modal>
        </div>
        ) : (
            <ClipLoader
            color={color}
            loading={true}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            cssOverride={override}
        />
        )}
        </>
    )
}
export default SingleBlog;