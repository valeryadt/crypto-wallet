import './home-page.css';
import Btn from "../../components/header/btn/btn";
import CurrencyBlock from "./currency-block/currency-block";

function HomePage(props) {

    const updateCoins = props.coins.slice(0, 3)
    return (
        <div className="home home__bg" >
            <div className="about">
                <div className="about__text">
                    <p className="about__text-title">CryptoWallet</p>
                    <p className="about__text-description">Easy way to buy, use and sell your crypto</p>
                </div>
                <div className="about__btn">
                    <Btn text="Try it!" styling="btn start home__btn"/>
                </div>
            </div>
            <div className="home__currencies">
                {updateCoins.map(coins => {
                    const {id} = coins
                    return (
                        <CurrencyBlock key={id} coins={coins} />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;