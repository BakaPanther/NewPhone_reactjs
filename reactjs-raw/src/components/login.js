import { } from '../vendor/css/login.css';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";

import 'react-toastify/dist/ReactToastify.css';
import notifySuccess from './items/noti_success';
import notifyInfor from './items/noti_infor';
import notifyError from './items/noti_error';

import { NavLink } from 'react-router-dom';


export default function Login() {





    //login
    //lưu thông tin đăng nhập của người dùng
    const [formLogin, setformLogin] = useState({
        email: '',
        password: '',
    });
    const handleInputChangeLogin = (event) => {
        const { name, value } = event.target;
        setformLogin({ ...formLogin, [name]: value });
      };

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/dang-nhap', formLogin)
          .then((response) => {
            const token  = response.data.access_token;
            // Lưu token vào cookie với tên là 'accessToken' và cấu hình an toàn
            Cookies.set('accessToken', JSON.stringify(token), { secure: true, sameSite: 'strict', expires: 7 });
            notifySuccess("Đăng Nhập Thành Công");
            setTimeout(() => {
                window.location.href = "/";
              }, 1000);
          })
          .catch((error) => {
            if (error.response && error.response.status === 422) {
                if (error.response.data.errors) {
                    const { email, password } = error.response.data.errors;
                    if (email) {
                      notifyError(Object.values(email).join(''));
                    }
                    if (password) {
                      notifyError(Object.values(password).join(''));
                    }
                  }
            }
            else
            {
                const errors = error.response.data.error; 
                notifyError(Object.values(errors).join(''));
            }
          });
      };

    //registration
    //lưu thông tin đăng nhập của người dùng
    const [formRegis, setformRegis] = useState({
        email: '',
        password: '',
    });
    const handleInputChangeRegis= (event) => {
        const { name, value } = event.target;
        setformRegis({ ...formRegis, [name]: value });
    };

    const handleSubmitRegis= (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/dang-ky', formRegis)
          .then((response) => {
            notifySuccess('Đăng Ký Thành Công');
            setTimeout(() => {
              window.location.href = "/authen";
            }, 1000);
          })
          .catch((error) => {
            if (error.response && error.response.status === 422) {
                console.log();
                if (error.response.data.errors) {
                    const { email, password,dia_chi,so_dien_thoai,ten } = error.response.data.errors;
                    if (email) {
                      notifyError(Object.values(email).join(''));
                    }
                    if (password) {
                      notifyError(Object.values(password).join(''));
                    }
                    if (dia_chi) {
                        notifyError(Object.values(dia_chi).join(''));
                    }
                    if (so_dien_thoai) {
                        notifyError(Object.values(so_dien_thoai).join(''));
                    }
                    if (ten) {
                        notifyError(Object.values(ten).join(''));
                    }
                } 
                if(error.response.data.errors_email)
                {
                    notifyError(Object.values(error.response.data.errors_email).join(''));
                }
            }
            else if(error.response.status === 500)
            {
                const errors = error.response.data.error; 
                notifyError(Object.values(errors).join(''));
            }
            else
            {
                const errors = error.response.data.error; 
                notifyError(Object.values(errors).join(''));
            }
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
                        <NavLink to='/reset-password'>Forgot password?</NavLink>
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