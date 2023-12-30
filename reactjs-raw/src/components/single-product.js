import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import notifyInfor from "./items/noti_infor";
import notifyError from "./items/noti_error";
import notifySuccess from "./items/noti_success";
import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';

function SingleProduct(props) {
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
    
      <div className="single-product">
        <div className="product-img">
        {props.data && props.data.dien_thoai_id && (
          <NavLink to={`/product-details/${props.data.dien_thoai_id.id}`}>
            <>
              <img className="default-img" src={`http://localhost:8000/${props.data.dien_thoai_id.hinh_anh[0].duong_dan}`} alt="#" />
              <img className="hover-img" src={`http://localhost:8000/${props.data.dien_thoai_id.hinh_anh[0].duong_dan}`} alt="#" />
            </>
            <span className="out-of-stock">Hot</span>
          </NavLink>
        )}

          <div className="button-head">
            <div className="product-action">
            {props.data && props.data.dien_thoai_id && (
              <>
              <NavLink data-toggle="modal"   to={`/product-details/${props.data.dien_thoai_id.id}`} data-target="#exampleModal" title="Quick View" href="#"><i className="ti-eye"></i><span>Quick Shop</span></NavLink>
              <a title="Wishlist" onClick={() => handleAddToCart(props.data.id)}><i className="ti-heart"></i><span>Add to Cart</span></a>
              </>
            )}
            
            </div>
            <div className="product-action-2">
              <a title="Add to cart" href="#">Add to cart</a>
            </div>
          </div>
        </div>
        <div className="product-content">
		{props.data && props.data.dien_thoai_id && (
              <>
          <h3><NavLink to='/product-details'>{props.data.dien_thoai_id.ten}</NavLink></h3>
          <div className="product-price">
            <span className="old">{props.data.mau_sac_id.ten}</span>
            <span>{props.data.gia_ban}</span>
          </div>
		  </>
            )}
        </div>
      </div>
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

export default SingleProduct;
