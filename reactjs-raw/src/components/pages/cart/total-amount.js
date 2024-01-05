import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation  } from 'react-router-dom';
import notifySuccess from "../../items/noti_success";
import { Redirect } from 'react-router-dom';
import notifyError from "../../items/noti_error";

export function TotalAmount(props) {
    const location = useLocation();
    useEffect(() => {
        // Lấy thông tin từ URL
        const searchParams = new URLSearchParams(location.search);
        const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
        const vnp_Amount = searchParams.get('vnp_Amount');

    
        // Xử lý logic dựa trên thông tin từ URL
        if (vnp_ResponseCode === '00') {
            notifySuccess('Thanh toán thành công, đơn hàng đặt thành công')
            axios.post('http://127.0.0.1:8000/api/phieu-xuat/them-moi', {
                khach_hang_id : user.id,
                tong_tien : vnp_Amount,
                trang_thai_thanh_toan : 1
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
        }
        else if(vnp_ResponseCode === '09'){
            notifySuccess('Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else if(vnp_ResponseCode === '11'){
            notifySuccess('Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else if(vnp_ResponseCode === '10'){
            notifySuccess('Khách hàng xác thực thông tin thẻ/tài khoản không đúng quá 3 lần')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else if(vnp_ResponseCode === '13'){
            notifySuccess('Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch.')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else if(vnp_ResponseCode === '24'){
            notifySuccess('Khách hàng hủy giao dịch')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else if(vnp_ResponseCode === '51'){
            notifySuccess('Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else if(vnp_ResponseCode === '51'){
            notifySuccess('Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.')
            setTimeout(() => {
                window.location.href = '/cart'; 
              }, 3000);
        }
        else{
            // notifySuccess('Giao dịch thất bại.')
            // setTimeout(() => {
            //     window.location.href = '/cart'; 
            //   }, 3000);
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
        else if(props.payment === 2)
        {
            axios.post('http://127.0.0.1:8000/api/thanh-toan-vnpay', {
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
        else{
            notifyError('Vui lòng chọn phương thức thanh toán');
        }
    }
    console.log(props.tongtien);
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