import './footer.css'
import EiScGithub from "./icones/EiScGithub";
import EiScLinkedin from "./icones/EiScLinkedin";
import EiScVk from "./icones/EiScVk";
import EiScTelegram from "./icones/EiScTelegram";
import EiScYoutube from "./icones/EiScYoutube";
import Logotype from "../logotype/logotype";
import CarbonSendAlt from "./icones/CarbonSendAlt";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__body">
                <div className="footer__block">
                    <div className="footer__logo"><Logotype /></div>
                    <div className="footer__about">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vivamus ut interdum magna, ac
                        scelerisque sapien.
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__block-name">Contact Info</div>
                    <div className="footer__block-links">
                        <div className="footer__block-link footer__link-location">Location: Moscow, Russia</div>
                        <div className="footer__block-link">Email: finvers@test.ru</div>
                        <div className="footer__block-link footer__link-phone">Office: +7 900 000 00 00</div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__block-name">Fast Links</div>
                    <div className="footer__block-links">
                        <div className="footer__block-link"><a href="#">Home</a></div>
                        <div className="footer__block-link"><a href="#">About Us</a></div>
                        <div className="footer__block-link"><a href="#">Cryptocurrencies</a></div>
                        <div className="footer__block-link"><a href="#">Crypto News</a></div>
                        <div className="footer__block-link"><a href="#">My Account</a></div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__block-name">Newsletter</div>
                    <div className="footer__block-links">
                        <div className="footer__block-info">Keep up with our latest news and events. Subscribe to our newsletter!</div>
                        <div className="footer__input-container">
                            <input type="email"
                                   placeholder="Your Email..."
                                   className="footer__input"/>
                            <button
                                type="submit"
                                className="footer__btn">
                                <CarbonSendAlt className="footer__send-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__text">Copyright ©2022 All rights reserved</div>
                <div className="copyright__links">
                    <EiScGithub className="copyright__link"/>
                    <EiScLinkedin className="copyright__link" />
                    <EiScVk className="copyright__link" />
                    <EiScTelegram className="copyright__link" />
                    <EiScYoutube className="copyright__link" />

                </div>
            </div>
        </div>
    )
}

export default Footer;