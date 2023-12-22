import { } from '../vendor/css/login.css';
export default function Login() {
    return (

        <>
            <div className="login-container">
                <input type="checkbox" id="check" />
                <div className="login form">
                    <header>Login</header>
                    <form action="#">
                        <input type="text" placeholder="Enter your email" />
                        <input type="password" placeholder="Enter your password" />
                        <a href="#">Forgot password?</a>
                        <input type="button" className="button" value="Login" />
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