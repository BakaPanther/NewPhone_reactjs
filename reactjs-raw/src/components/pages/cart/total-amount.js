import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function TotalAmount(props) {
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