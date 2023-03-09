import './contact-us.css';
import Btn from "../header/btn/btn";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import IonMdMail from "./icones/IonMdMail";
import MdiPhone from "./icones/MdiPhone";
import Fa6SolidLocationDot from "./icones/Fa6SolidLocationDot";
import EiScGithub from "../footer/icones/EiScGithub";
import EiScTelegram from "../footer/icones/EiScTelegram";
import EiScVk from "../footer/icones/EiScVk";

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
            <div className="contact__container flex flex-row-reverse w-full justify-between gap-5">
                <div className="contact__forms pr-24">
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
                <div className="contact__description-container">
                    <div className="contact__title">
                        Contact us
                        <div className="contact__description">
                            <div className="contact__form-text">Our friendly team would love to hear from you!</div>
                        </div>
                    </div>
                    <div className="contact__information">
                        <div className="contact__icon-container">
                            <IonMdMail className="contact__icon"/>
                            <div className="contact__information-text">finvers.company@yandex.ru</div>
                        </div>
                        <div className="contact__icon-container">
                            <MdiPhone className="contact__icon"/>
                            <div className="contact__information-text">+7 900 000 00 00</div>
                        </div>
                        <div className="contact__icon-container">
                            <Fa6SolidLocationDot className="contact__icon"/>
                            <div className="contact__information-text">Moscow, Russia</div>
                        </div>
                    </div>
                    <div className="contact__sm-container">
                        <div className="contact__sm">
                            <a className="contact__sm-link">
                                <EiScGithub className="contact__sm-icon"/>
                            </a>
                        </div>
                        <div className="contact__sm">
                            <a className="contact__sm-link">
                                <EiScTelegram className="contact__sm-icon"/>
                            </a>
                        </div>
                        <div className="contact__sm">
                            <a className="contact__sm-link">
                                <EiScVk className="contact__sm-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;