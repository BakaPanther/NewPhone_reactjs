import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation  } from 'react-router-dom';
import notifySuccess from "../../items/noti_success";

export function TotalAmount(props) {
    const location = useLocation();
    useEffect(() => {
        // Lấy thông tin từ URL
        const searchParams = new URLSearchParams(location.search);
        const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
        const vnp_TransactionNo = searchParams.get('vnp_TransactionNo');

    
        // Xử lý logic dựa trên thông tin từ URL
        if (vnp_ResponseCode === '00') {
            notifySuccess('Thanh toán thành công, đơn hàng đặt thành công')
            axios.post('http://127.0.0.1:8000/api/phieu-xuat/them-moi', {
                khach_hang_id : user.id,
                tong_tien : props.tongtien
            })
            .then((response) => {
                setTimeout(() => {
                    window.location.href = '/cart'; 
                  }, 3000);
                })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error('Lỗi khi xóa sản phẩm:', error);
            });
        } else {
          // Xử lý trường hợp giao dịch không thành công
        }
      }, [location]);
    const [user,setUser] = useState(JSON.parse(Cookies.get('user')));
    const handlBuy = () => {
        if(props.payment === 1)
        {
            axios.post('http://127.0.0.1:8000/api/phieu-xuat/them-moi', {
                khach_hang_id : user.id,
                tong_tien : props.tongtien
            })
            .then((response) => {
                alert('đặt hàng thành công');
                window.location.reload();
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error('Lỗi khi xóa sản phẩm:', error);
            });
        }
        if(props.payment === 2)
        {
            axios.post('http://127.0.0.1:8000/api/thanh-toan-vnpay', {
                khach_hang_id : user.id,
                tong_tien : props.tongtien
            })
            .then((response) => {
                window.location.href = response.data.data;
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error('Lỗi khi xóa sản phẩm:', error);
            });
        }
    }
    return (
        <>
            <div className="total-amount">
                <div className="row">
                    <div className="col-lg-8 col-md-5 col-12">
                        <div className="left">
                            <div className="coupon">
                                <form action="#" target="_blank">
                                    <input name="Coupon" placeholder="Enter Your Coupon" />
                                    <button className="btn">Apply</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-7 col-12">
                        <div className="right">
                            <ul>
                                <li>Shipping<span>Free</span></li>
                                <li>Số lượng<span>{props.soluong}</span></li>
                                <li className="last">Tổng tiền<span>{props.tongtien}</span></li>
                            </ul>
                            <div className="button5">
                                <button onClick={handlBuy} name="redirect" className="btn"> Mua ngay </button>
                                <a href="#" className="btn">Continue shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}