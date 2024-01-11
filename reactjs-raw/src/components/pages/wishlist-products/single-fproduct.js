import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

import axios from "axios";
import notifySuccess from "../../items/noti_success";
export default function SingleWproduct(props) {
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
        handleRemove(id,user.id);
    }

};
  const handleRemove = (idchitiet, idkhachhang) => {
		axios.post('http://127.0.0.1:8000/api/khach-hang/xoa-yeu-thich', {
			'khach_hang_id': idkhachhang,
			'chi_tiet_dien_thoai_id': idchitiet
		})
			.then((response) => {
				// Xử lý sau khi xóa thành công, nếu cần
				console.log('Đã xóa sản phẩm khỏi danh sách yêu thích');
				window.location.reload();
			})
			.catch((error) => {
				// Xử lý lỗi nếu có
				console.error('Lỗi khi xóa sản phẩm:', error);
			});
	};
  return (
    <>
      {props.data.map((item, key) => (
        < tr key={key}>
          {item.hinh_anh_id && item.hinh_anh_id.length > 0 ? (

            <td className="image" data-title="No">

              <span>{item.dien_thoai_id.ten}</span>
              <img src={`http://localhost:8000/` + item.hinh_anh_id[0].duong_dan} alt="#" />
            </td>
          ) : (
            <span>Không có dữ liệu</span>
          )}
          <td className="product-des" data-title="Description">
            <p className="product-name">
              <a href="#">{item.mau_sac_id.ten}</a>
            </p>
          </td>
          <td className="price" data-title="DungLuong">
            <span>{item.dung_luong_id.ten}</span>
          </td>
          <td className="total-amount" data-title="GiaBan">
            <span>{item.chi_tiet_dien_thoai_id.gia_ban}</span>
          </td>
          <td className="action" data-title="Add to cart">
            <a href="#" title="Add to cart" onClick={() => handleAddToCart(item.chi_tiet_dien_thoai_id.id)}><i className="ti-bag"></i></a>
          </td>
          <td className="action" data-title="Remove">
            <a href="#" onClick={()=> handleRemove(item.chi_tiet_dien_thoai_id.id, item.khach_hang_id.id)}><i className="ti-trash remove-icon"></i></a>
          </td>
        </tr >
      ))
      }
    </>
  )
}