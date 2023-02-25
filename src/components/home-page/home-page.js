import './home-page.css';
import Btn from "../header/btn/btn";
import CurrencyBlock from "./currency-block/currency-block";

function HomePage() {

    return (
        <div className="home">
            <div className="about">
                <div className="about__text">
                    <p className="about__text-title">CryptoWallet</p>
                    <p className="about__text-description">Easy way to buy, use and sell your crypto</p>
                </div>
                <div className="about__btn">
                    <Btn text="Try it!" styling="btn start"/>
                </div>
            </div>
            <div className="home__currencies">
                <div>
                    <CurrencyBlock />
                </div>
                <div className="home__tether-container">
                    <div className="home__currency">

                    </div>
                </div>
                <div className="home__ethereum-container">
                    <div className="home__currency"></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;