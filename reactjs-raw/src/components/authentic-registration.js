import { } from '../vendor/css/login.css';
import Cookies from 'js-cookie';
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";
import notifySuccess from './items/noti_success';
import notifyInfor from './items/noti_infor';
import notifyError from './items/noti_error';
export default function Login() {
    const [token, setToken] = useState('');
    const handleChangeToken = (event) => {
        setToken(event.target.value);
      };
    const handleSubmitToken= (event) => {
        event.preventDefault();
        
        axios.post('http://127.0.0.1:8000/api/khach-hang/xac-thuc-dang-ky',  { token: token })
          .then((response) => {
            notifySuccess('Xác Thực Thành Công');
            setTimeout(() => {
              window.location.href = "/login";
            }, 1000);
          })
          .catch((error) => {
            if(error.response && error.response.status === 400)
            {
              const errors = error.response.data.message; 
              notifyError(Object.values(errors).join(''));
            }
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