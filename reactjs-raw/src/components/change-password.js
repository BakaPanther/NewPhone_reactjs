import { NavLink } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function ChangePassword(){
    return (
        <>
        <div className="reset-password-container">
                <div className="reset-password form">
                    <header>Thay đổi mật khẩu</header>
                    <form >
                        <input type="password" placeholder="Nhập mật khẩu cũ" name="password"/>
                        <input type="password" placeholder="Nhập mật khẩu mới" name="re-password"/>
                        <input type="password" placeholder="Xác nhận mật khẩu mới" name="accept-password"/>
                        <input type="submit" className="button" value="Xác nhận" />
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