import { useState, useEffect } from 'react';
import Footer from "../../footer";
import EditIcon from '../../../assets/images/edit-icon.png'
import SingleBoughtProduct from './single-bought-product';
import Cookies from 'js-cookie';
import Header from '../../header';
import axios from 'axios';
import notifySuccess from '../../items/noti_success';
import { NavLink } from 'react-router-dom';
export default function MyAccount() {
    const [khach_hang, setKhach_hang] = useState(JSON.parse(Cookies.get('user')));
    const [thong_tin_khach_hang, setThong_tin_khach_hang] = useState({
        ten: khach_hang.ten,
        email: khach_hang.email,
        so_dien_thoai: khach_hang.so_dien_thoai,
        dia_chi: khach_hang.dia_chi,
    })
    const [don_hang, setDonHang] = useState({});
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setThong_tin_khach_hang({ ...thong_tin_khach_hang, [name]: value });
    };
    console.log(thong_tin_khach_hang);
    const token = JSON.parse(Cookies.get('accessToken'));
    // console.log(token);
    const handelLuu = (event) => {
        event.preventDefault(); //
        axios.post('http://127.0.0.1:8000/api/khach-hang/cap-nhat-thong-tin', {
            'khach_hang_id': khach_hang.id,
            ...thong_tin_khach_hang
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                // Xử lý dữ liệu trả về
                // Cập nhật toàn bộ thông tin mới vào state khach_hang
                setKhach_hang(prevKhachHang => ({
                    ...prevKhachHang,
                    ten: response.data.data.ten,
                    email: response.data.data.email,
                    so_dien_thoai: response.data.data.so_dien_thoai,
                    dia_chi: response.data.data.dia_chi,
                }));


                // Lưu thông tin cập nhật vào cookies (chuyển đổi thành chuỗi JSON)
                Cookies.set('user', JSON.stringify(response.data.data));

                console.log(khach_hang);
                notifySuccess('Cập Nhật Thành Công');

            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Lỗi khi gửi yêu cầu:', error);
            });
    };

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/khach-hang/don-hang', {
            params: {
                khach_hang_id: khach_hang.id
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                // Xử lý dữ liệu response ở đây
                // console.log(response.data);
                setDonHang(response.data.data);
            })
            .catch(error => {
                // Xử lý lỗi ở đây
                console.error(error);
            });
    }, [token]);
    console.log(don_hang);

    return (
        <>
            <Header />
            <div className="my-account-container">
                <div className='edit-info'>
                    <div className="row">
                        <div className="menu-left col-6">
                            <form className="form" method='POST' onSubmit={handelLuu}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            {/* <label>Họ tên<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label> */}
                                            <label>Họ tên</label>
                                            <input type="text" name="ten" value={thong_tin_khach_hang.ten} required="required" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" value={thong_tin_khach_hang.email} required="required" onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <input type="text" name="so_dien_thoai" value={thong_tin_khach_hang.so_dien_thoai} required="required" onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-12">
                                        <div className="form-group">
                                            <label>Địa chỉ</label>
                                            <input type="text" name="dia_chi" value={thong_tin_khach_hang.dia_chi} required="required" onChange={handleInputChange} />
                                        </div>
                                    </div>

                                    {/* <div className="col-lg-6 col-md-6 col-12">
                                        <div className="form-group">
                                            <label>Postal Code<span><button onClick=''><img src={EditIcon} alt='' />Sửa</button></span></label>
                                            <input type="text" name="post" value="200000" required="required" />
                                        </div>
                                    </div> */}

                                </div>
                                <div className='save-edit' style={{ 'text-align': 'center' }}>
                                    <input type="submit" className="button" value="Lưu Thông Tin" />
                                </div>
                            </form>
                            <div className='save-edit' style={{ 'text-align': 'center' }}>
                                <NavLink to={"/change-password"}>Đổi Mật Khẩu</NavLink>
                            </div>

                        </div>
                        <div className="menu-right col-6">
                            <h6>ĐƠN HÀNG ĐÃ MUA </h6>
                            <div className="bought-products">
                                <SingleBoughtProduct data={don_hang} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <Footer />
        </>
    )
}