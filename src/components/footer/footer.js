import './footer.css'
import EiScGithub from "./icones/EiScGithub";
import EiScLinkedin from "./icones/EiScLinkedin";
import EiScVk from "./icones/EiScVk";
import EiScTelegram from "./icones/EiScTelegram";
import EiScYoutube from "./icones/EiScYoutube";
import Logotype from "../logotype/logotype";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__body">
                <div className="footer__block">
                    <div className="pb-4 flex items-start w-full"><Logotype /></div>
                    <div className="text-sm w-40 h-auto text-justify font-medium text-white/70">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vivamus ut interdum magna, ac
                        scelerisque sapien.
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__block-name">Contact Info</div>
                    <div className="footer__block-links">
                        <div className="footer__block-link text-start text-sm">Location: Moscow, Russia</div>
                        <div className="footer__block-link">Email: finvers@test.ru</div>
                        <div className="footer__block-link">Office: +7 900 000 00 00</div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__block-name">Fast Links</div>
                    <div className="footer__block-links">
                        <div className="footer__block-link">Home</div>
                        <div className="footer__block-link">About Us</div>
                        <div className="footer__block-link">Cryptocurrencies</div>
                        <div className="footer__block-link">Crypto News</div>
                        <div className="footer__block-link">My Account</div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className="footer__block-name">Newsletter</div>
                    <div className="footer__block-links">
                        <div className="w-40 h-auto text-justify text-sm font-medium text-white/70">Keep up with our latest news and events. Subscribe to our newsletter!</div>
                        <div>
                            <input type="email" className="w-50 rounded-3xl h-8 text-black p-2"/>
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