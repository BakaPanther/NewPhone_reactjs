import { NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
import notifyInfor from "./items/noti_infor";
import notifyError from "./items/noti_error"; 
import notifySuccess from "./items/noti_success";
import React, { useState, useEffect } from "react";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardBody,CardTitle,CardSubtitle,CardText } from 'reactstrap';
import { data } from "jquery";
import { FaUnderline } from "react-icons/fa";


function SingleProduct(props) {
  const [user, setUser] = useState(JSON.parse(Cookies.get('user')));
  const [modal, setModal] = useState(false);
  const [compare, setCompare] = useState(false);

  const addToCart = (id_chi_tiet) => {
    axios.post('http://127.0.0.1:8000/api/khach-hang/gio-hang-them-moi', {
      khach_hang_id: user.id,
      chi_tiet_dien_thoai_id: id_chi_tiet,
      so_luong: 1
    })
      .then((response) => {
        notifySuccess('Thêm vào giỏ hàng thành công');
      })
      .catch((error) => {

      });
  }

  const handleAddToCart = (id) => {
    if (Cookies.get('accessToken') === undefined) {
      setModal(!modal)
    }
    else {
      addToCart(id);
    }

  };

  const addToWishList = (id_chi_tiet) => {
    axios.post('http://127.0.0.1:8000/api/khach-hang/yeu-thich-them-moi', {
      khach_hang_id: user.id,
      chi_tiet_dien_thoai_id: id_chi_tiet,
    })
      .then((response) => {
        notifySuccess('Thêm vào yêu thích thành công');
      })
      .catch((error) => {

      });
  }

  const handleAddToWishList = (id) => {
    if (Cookies.get('accessToken') === undefined) {
      setModal(!modal)
    }
    else {
      addToWishList(id);
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

const [select1, setSelect1] = useState(null);
const [select2, setSelect2] = useState(null);



const handleProductSelect = (productId) => {
  console.log("id sản phẩm: ", productId);

  if (select1 === null) {
    setSelect1(productId);
  } else if (select2 === null) {
    setSelect2(productId);
  } else {
    notifyInfor('Đã đủ 2 sản phẩm');
  }
};

// Hàm này giúp đảm bảo không xảy ra lỗi liên quan đến việc cập nhật state
const resetSelect = () => {
  setSelect1(null);
  setSelect2(null);
};

useEffect(() => {
  console.log(select1, "  4 ", select2);
  if (select1 !== null && select2 !== null) {
    localStorage.setItem('id1',select1);
    localStorage.setItem('id2',select2);
    window.location.href = '/compare-products';
   
  }
}, [select1, select2]);








  return (
    <>

      <div className="single-product">
        <div className="product-img">
          {props.data && props.data.dien_thoai_id && props.data.dien_thoai_id.hinh_anh[0] && (
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
              <a  onClick={() => handleProductSelect(props.data.id)}><i className="ti-eye"></i><span>So sánh</span></a>
              <NavLink data-toggle="modal"   to={`/product-details/${props.data.dien_thoai_id.id}`} data-target="#exampleModal" href="#"><i className="ti-eye"></i><span>Xem chi tiết</span></NavLink>
              <a onClick={() => handleAddToWishList(props.data.id)}><i className="ti-heart"></i><span>Add to Wishlish</span></a>
              </>
            )}
            
            </div>
            
            <div className="product-action-2">
              <a title="Add to cart" onClick={() => handleAddToCart(props.data.id)}>Add to cart</a>
            </div>
          </div>
        </div>
        <div className="product-content">
          {props.data && props.data.dien_thoai_id && (
            <>
              <h3><NavLink to='/product-details'>{props.data.dien_thoai_id.ten} {props.data.mau_sac_id.ten}</NavLink></h3>
              <div className="product-price">
                <span className="old"> { } </span>
                <span>Giá: {props.data.gia_ban} VNĐ</span>
              </div>
            </>
          )}
        </div>
      </div>
      {/* modal */}
      <Modal isOpen={modal} size="sm" className="my-modal">
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
