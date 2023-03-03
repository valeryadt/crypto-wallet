import './authorization.css';
import Logotype from "../logotype/logotype";
import Btn from "../header/btn/btn";

function Authorization() {
    return (
        <div className="auth">
            <div className="auth__form">
                <div className="auth__form-header">
                    Sign in
                    <div className="auth__form-greeting">
                        <div className="auth__form-text">Welcome to</div>
                        <Logotype />
                    </div></div>
                <div className="auth__input-forms">
                    <div className="auth__input-name">Email</div>
                <input type="text" placeholder="Your login" className="auth__input"/>
                </div>
                <div className="auth__input-forms">
                    <div  className="auth__input-name">Password</div>
                <input type="password" placeholder="Your password" className="auth__input"/>
                </div>
                <Btn text="Sign in" styling="btn login mt-2"/>
                <div className="auth__router">
                    <p>Don't have an account? <a href="#" className="auth__link">Register now!</a></p>
                </div>
            </div>
            <div className="auth__container">
                <img src="/img/wallet.png" className="auth__img" alt=""/>
            </div>
        </div>
    )
}

export default Authorization;