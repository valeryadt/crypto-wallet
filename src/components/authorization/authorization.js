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
                        <div className="auth__form-text">Welcome back to</div>
                        <Logotype />
                    </div></div>
                <div className="auth__input-forms">
                    <div className="auth__input-name">Email</div>
                <input type="text" placeholder="example@gmail.com" className="auth__input"/>
                </div>
                <div className="auth__input-forms">
                    <div  className="auth__input-name">Password</div>
                <input type="password" placeholder="password" className="auth__input"/>
                </div>
                <div className="auth__btn-container">
                <Btn text="Sign in" styling="btn login auth__btn"/>
                </div>
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