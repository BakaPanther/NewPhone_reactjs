import { NavLink } from "react-router-dom";
import { useState } from "react";
import notifyError from "./items/noti_error";
import notifySuccess from "./items/noti_success";
import Cookies from "js-cookie";
import axios from "axios";
export default function ChangePassword() {
    const [khach_hang_id, setKhach_hang_id] = useState(JSON.parse(Cookies.get('user')));
    const [formData, setFormData] = useState({
        password: "",
        newPassword: "",
        confirmNewPassword: ""
    });
    const handInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    console.log(formData);
    const handelLuuMk = (e) => {
        e.preventDefault();

        if (formData.newPassword !== formData.confirmNewPassword) {
            notifyError("Mật khẩu mới và Xác nhận mật khẩu mới không giống nhau");
        } else {
            const token = JSON.parse(Cookies.get('accessToken'));
            axios.post('http://127.0.0.1:8000/api/khach-hang/doi-mat-khau', {
                khach_hang_id: khach_hang_id.id,
                ...formData
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    if (response.data.success) {
                        notifySuccess(response.data.messages);
                        setTimeout(() => {
                            notifySuccess("Vui lòng hãy đăng nhập lại");
                        }, 1000);
                        setTimeout(() => {
                            Cookies.remove('accessToken');
                            window.location.href = "/login";
                        }, 3000);
                    } else {
                        notifyError(response.data.messages);
                    }
                })
                .catch(error => {
                    // console.error("Lỗi khi đổi mật khẩu:", error);
                    notifyError("Có lỗi xảy ra khi đổi mật khẩu");
                });

        }
    }

    return (
        <>
            <div className="reset-password-container">
                <div className="reset-password form">
                    <header>Thay đổi mật khẩu</header>
                    <form >
                        <input type="password" placeholder="Nhập mật khẩu cũ" name="password" onChange={handInput} />
                        <input type="password" placeholder="Nhập mật khẩu mới" name="newPassword" onChange={handInput} />
                        <input type="password" placeholder="Xác nhận mật khẩu mới" name="confirmNewPassword" onChange={handInput} />
                        <input type="submit" className="button" value="Xác nhận" onClick={handelLuuMk} />
                    </form>
                    <div className="signup">
                        <span className="signup">Không cần thay đổi mật khẩu?
                            <label><NavLink to='/login'>Login</NavLink></label>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}