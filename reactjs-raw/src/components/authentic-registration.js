import { } from '../vendor/css/login.css';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";

export default function Login() {
    const [token, setToken] = useState('');
    const handleChangeToken = (event) => {
        setToken(event.target.value);
      };
    const handleSubmitToken= (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/xac-thuc-dang-ky',  { token: token })
          .then((response) => {
            alert('xác thực thành công');
            window.location.href = "/login";
          })
          .catch((error) => {
            console.log(token);
            console.error('Lỗi đăng ký:', error);
          });
      };
    return (
        <>
            <div className="login-container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>XÁC THỰC</header>
                    <form onSubmit={handleSubmitToken}>
                        <label>NHẬP MÃ BẠN NHẬN ĐƯỢC</label>
                        <input type="text" placeholder="Enter your code" name="token" value={token} onChange={handleChangeToken}/>
                        <input type="submit" className="button" value="Login" />
                    </form>
                </div>
            </div>
        </>

    )
}