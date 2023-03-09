import './registration.css'
import Btn from "../header/btn/btn";

function Registration() {
    return (
        <div className="registry">
            <div className="registry__form">
                <div className="registry__form-header">
                    Register now
                    <div className="registry__description">Create an account and use all the features of our
                        service!</div>
                </div>
                <div className="registry__input-forms">
                    <div className="registry__input-name">Email</div>
                    <input type="text" placeholder="example@gmail.com" className="registry__input"/>
                </div>
                <div className="registry__input-forms">
                    <div className="registry__input-name">Password</div>
                    <input type="password" placeholder="********" className="registry__input"/>
                </div>
                <div className="registry__input-forms">
                    <div className="registry__input-name">Repeat password</div>
                    <input type="password" placeholder="********" className="registry__input"/>
                </div>
                <div className="registry__checkbox-forms">
                    <input type="checkbox" id="accept"/>
                    <label htmlFor="accept">By submitting the registration you accept our Privacy Policy.</label>
                </div>
                <div className="registry__checkbox-forms">
                    <input type="checkbox" id="notify"/>
                    <label htmlFor="notify">Please notify me about new features and special offers.</label>
                </div>
                <div className="registry__btn-container">
                    <Btn text="Sign up" styling="btn login registry__btn"/>
                </div>
                <div className="registry__router">
                    <p>Already have an account? <a href="#" className="registry__link">Login now!</a></p>
                </div>
            </div>
            <div className="registry__container">
                <img src="/img/reg.png" className="registry__img" alt=""/>
            </div>
        </div>
    )
}

export default Registration;