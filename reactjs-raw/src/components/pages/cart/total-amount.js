import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import notifySuccess from "../../items/noti_success";
import notifyError from "../../items/noti_error";
import Swal from 'sweetalert2'
export function TotalAmount(props) {

    const [user, setUser] = useState(JSON.parse(Cookies.get('user')));
  
    const [idPhieuXuat, setIdPhieuXuat] = useState();
    const location = useLocation();

    const handlTaoMoi = () => {
        axios.post('http://127.0.0.1:8000/api/phieu-xuat/them-moi', {
            khach_hang_id: user.id,
            tong_tien: props.tongtien
        })
        .then((response) => {
            notifySuccess('Đặt hàng thành công');
            console.log(response.data.data);
            localStorage.setItem('id_phieu_xuat', response.data.data);
        })
        .catch((error) => {
            // Xử lý lỗi nếu có
            console.error('Lỗi tạo mới:', error);
        });
    }
    const handlThayDoiTrangThai = () => {
        axios.post('http://127.0.0.1:8000/api/phieu-xuat/cap-nhap-trang-thai', {
            id : localStorage.getItem('id_phieu_xuat')
        })
        .then((response) => {
            localStorage.removeItem('id_phieu_xuat');
            window.location.href = '/cart';
        })
        .catch((error) => {
            // Xử lý lỗi nếu có
            console.error('Lỗi khi thay đổi trạng thái:', error);
        });
    }


    

    useEffect(() => {
        // Lấy thông tin từ URL
        const searchParams = new URLSearchParams(location.search);
        const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
        const vnp_Amount = searchParams.get('vnp_Amount');


        // Xử lý logic dựa trên thông tin từ URL
        if (vnp_ResponseCode === '00') {
            handlThayDoiTrangThai();
            notifySuccess('Thanh Toan Thanh Cong');
            
        } else if (vnp_ResponseCode === '09') {
            notifyError('Thẻ/Tài khoản của khách hàng chưa đăng ký dịch vụ InternetBanking tại ngân hàng.');
            setTimeout(() => {
                window.location.href = '/cart';
            }, 3000);
        } else if (vnp_ResponseCode === '11') {
            notifyError('Đã hết hạn chờ thanh toán. Xin quý khách vui lòng thực hiện lại giao dịch.');
            setTimeout(() => {
                window.location.href = '/cart';
            }, 3000);
        }
        // Các trường hợp xử lý lỗi khác
        else if (vnp_ResponseCode === '13') {
            notifyError('Giao dịch không thành công do Quý khách nhập sai mật khẩu xác thực giao dịch (OTP). Xin quý khách vui lòng thực hiện lại giao dịch.');
            setTimeout(() => {
                window.location.href = '/cart';
            }, 3000);
        } else if (vnp_ResponseCode === '24') {
            notifyError('Khách hàng hủy giao dịch');
            setTimeout(() => {
                window.location.href = '/cart';
            }, 3000);
        } else if (vnp_ResponseCode === '51') {
            notifyError('Tài khoản của quý khách không đủ số dư để thực hiện giao dịch.');
            setTimeout(() => {
                window.location.href = '/cart';
            }, 3000);
        } else {
            //notifyError('Giao dịch thất bại.');
            // window.location.href = '/error-page';
        }
    }, []);

   
    const handlBuy = () => {
        if (props.soluong === 0) {
            notifyError("Số lượng phải lớn hơn 0 mới thanh toán được");
        }
        else {
            if (props.payment === 1) {
                handlTaoMoi();
                window.location.href = '/cart';
            }
            else if (props.payment === 2) {
                axios.post('http://127.0.0.1:8000/api/thanh-toan-vnpay', {
                    tong_tien: props.tongtien
                })
                    .then((response) => {
                        handlTaoMoi();
                       window.location.href = response.data.data;
                    })
                    .catch((error) => {
                        // Xử lý lỗi nếu có
                        console.error('Lỗi khi xóa sản phẩm:', error);
                    });
            }
            else {
                notifyError('Vui lòng chọn phương thức thanh toán');
            }
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
                                <button onClick={handlBuy} className="btn"> Mua ngay </button>
                                <a href="#" className="btn">Continue shopping</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}