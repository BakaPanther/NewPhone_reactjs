import { } from '../vendor/css/login.css';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
    //lưu thông tin đăng nhập của người dùng
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // Thêm các trường khác nếu cần thiết
      });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/dang-nhap', formData)
          .then((response) => {
            const { token } = response.data;
            // Lưu token vào cookie với tên là 'accessToken' và cấu hình an toàn
            Cookies.set('accessToken', token, { secure: true, sameSite: 'strict', expires: 7 });
            console.log("Đăng Nhập Thành Công");
            navigate("/");
          })
          .catch((error) => {
            console.error('Lỗi khi gửi request POST:', error);
          });
      };
    return (
        <>
            <div className="login-container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your email" name="email" value={formData.email}   onChange={handleInputChange}/>
                        <input type="password" placeholder="Enter your password"  name="password" value={formData.password}   onChange={handleInputChange}/>
                        <a href="#">Forgot password?</a>
                        <input type="submit" className="button" value="Login" />
                    </form>
                    <div className="signup">
                        <span className="signup">Or login with:
                        </span>
                    </div>
                    <div class="login-with"> 
                        <a href="#" class="fb btn">
                            <i class="fa fa-facebook fa-fw"></i>
                            Facebook
                        </a>
                        <a href="#" class="google btn"><i class="fa fa-google fa-fw"></i>
                            Google+
                        </a>
                    </div>
                    <div className="signup">
                        <span className="signup">Don't have an account?
                            <label for="check">Signup</label>
                        </span>
                    </div>
                </div>
                <div className="registration form">
                    <header>Signup</header>
                    <form action="#">
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Create a password" />
                        <input type="password" placeholder="Confirm your password" />
                        <input type="button" className="button" value="Signup" />
                    </form>
                    <div className="signup">
                        <span className="signup">Already have an account?
                            <label for="check">Login</label>
                        </span>
                    </div>
                </div>
            </div>
        </>

    )
}