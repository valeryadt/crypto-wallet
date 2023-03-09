import './contact-us.css';
import Btn from "../header/btn/btn";
import {useRef} from "react";
import emailjs from '@emailjs/browser';

function ContactUs() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i886d0q', 'template_b5at35s', form.current, 'pM9BRHcFNth4cLk76')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="contact">
            <div className="contact__forms">
                <div className="contact__form-header">
                    Contact us
                    <div className="contact__form-greeting">
                        <div className="contact__form-text">Our friendly team would love to hear from you!</div>
                    </div>
                </div>
                <div className="contact__form-container">
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__input-name">
                            Full name
                        </div>
                        <input
                            type="text"
                            placeholder="Mark Reed"
                            name="user_name"
                            className="contact__input"
                            required/>
                        <div className="contact__input-name">
                            Email
                        </div>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            name="user_email"
                            className="contact__input"
                            required/>
                        <div className="contact__input-name">
                            Subject line
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            className="contact__input"
                            required/>
                        <div className="contact__input-name">
                            Message
                        </div>
                        <textarea
                            name="message"
                            cols="30"
                            rows="5"
                            className="contact__textarea"
                            placeholder="Your text here...">
                        </textarea>
                        <div className="contact__btn-container">
                            <Btn text="Send message" styling="btn login contact__btn" type="submit"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact__img-container">
                <img src="/img/contact.png" className="contact__img" alt=""/>
            </div>
        </div>
    )
}

export default ContactUs;