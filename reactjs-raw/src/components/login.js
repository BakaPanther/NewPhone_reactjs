import { } from '../vendor/css/login.css';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";

export default function Login() {

    //login
    //lưu thông tin đăng nhập của người dùng
    const [formLogin, setformLogin] = useState({
        email: '',
        password: '',
        // Thêm các trường khác nếu cần thiết
      });
    const handleInputChangeLogin = (event) => {
        const { name, value } = event.target;
        setformLogin({ ...formLogin, [name]: value });
      };

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/dang-nhap', formRegis)
          .then((response) => {
            const token  = response.data.access_token;
            // Lưu token vào cookie với tên là 'accessToken' và cấu hình an toàn

            Cookies.set('accessToken', JSON.stringify(token), { secure: true, sameSite: 'strict', expires: 7 });
            window.location.href = "/";

          })
          .catch((error) => {
            console.error('Lỗi đăng nhập:', error);
          });
      };

      //registration
          //lưu thông tin đăng nhập của người dùng
    const [formRegis, setformRegis] = useState({
        email: '',
        password: '',
        // Thêm các trường khác nếu cần thiết
    });
    const handleInputChangeRegis= (event) => {
        const { name, value } = event.target;
        setformRegis({ ...formRegis, [name]: value });
    };

    const handleSubmitRegis= (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/dang-ky', formRegis)
          .then((response) => {
            console.log(response.data);
            window.location.href = "/authen";
          })
          .catch((error) => {
            console.error('Lỗi đăng ký:', error);
          });
      };
    return (
        <>
            <div className="login-container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form onSubmit={handleSubmitLogin}>
                        <input type="text" placeholder="Enter your email" name="email" value={formLogin.email}   onChange={handleInputChangeLogin}/>
                        <input type="password" placeholder="Enter your password"  name="password" value={formLogin.password}   onChange={handleInputChangeLogin}/>
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
                    <form onSubmit={handleSubmitRegis}>
                        <input type="text" placeholder="Enter your Name" name="ten" value={formRegis.ten}   onChange={handleInputChangeRegis} />
                        <input type="text" placeholder="Enter your Location" name="dia_chi" value={formRegis.dia_chi}   onChange={handleInputChangeRegis} />
                        <input type="tel" placeholder="Enter your Phone" name="so_dien_thoai" value={formRegis.so_dien_thoai}   onChange={handleInputChangeRegis} />
                        <input type="text" placeholder="Enter your email" name="email" value={formRegis.email}   onChange={handleInputChangeRegis} />
                        <input type="password" placeholder="Create a password" name="password" value={formRegis.password}   onChange={handleInputChangeRegis} />
                        <input type="submit" className="button" value="Signup" />
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