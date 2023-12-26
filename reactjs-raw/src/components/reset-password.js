import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import notifySuccess from './items/noti_success';
import notifyError from './items/noti_error';
export default function ResetPassword() {
    const [resetpassword, setResetPassword] = useState({
        email: ""
    });

    const handleInputChangeResetPassword = (event) => {
        const { name, value } = event.target;
        setResetPassword({ ...resetpassword, [name]: value });
    };

    console.log(resetpassword);
    const handleSubmitResetPassword = (event) => {
        event.preventDefault();


        axios.post('http://127.0.0.1:8000/api/khach-hang/cap-nhat-mat-khau', resetpassword)
            .then((response) => {
                console.log(response.data);
                notifySuccess('Gửi Thành Công Vui Lòng Kiểm Tra Mail');
                setTimeout(() => {
                    window.location.href = "/login";
                }, 1000);
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    const errors = error.response.data.message;
                    notifyError(Object.values(errors).join(''));
                }
            });

    }


    return (
        <>
            <div className="reset-password-container">
                <div className="reset-password form">
                    <header>Recovery password</header>
                    <form onSubmit={handleSubmitResetPassword}>
                        <input type="text" placeholder="Enter your email" name="email" onChange={handleInputChangeResetPassword} />
                        <input type="submit" className="button" value="Send" />
                    </form>
                    <div className="signup">
                        <span className="signup">Remember your password?
                            <label><NavLink to='/login'>Login</NavLink></label>
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}