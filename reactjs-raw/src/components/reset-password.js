import { NavLink } from "react-router-dom";

export default function ResetPassword(){
    return (
        <>
        <div className="reset-password-container">
            <div className="reset-password form">
                <header>Recovery password</header>
                <form>
                    <input type="text" placeholder="Enter your email" name="email" />
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