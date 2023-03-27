import './trending-card.css';
import CryptocurrencyColorBtc from "./icon/CryptocurrencyColorBtc";
import { Link } from "react-router-dom"



function TrendingCard(props) {
    const {small, name, symbol, price_btc, market_cap_rank, score, id} = props.item

    return (
        <Link to={`/cryptocurrencies/${id}`}>
            <div className="trending-card">
                <div className="trending-card__info">
                    <div className="trending-card__img-container">
                        <img src={small} alt="" className="trending-card__img"/>
                    </div>
                    <div className="trending-card__info-name">
                        {name}
                    </div>
                    <div className="trending-card__info-symbol">
                        {symbol}
                    </div>
                </div>
                <div className="trending-card__price-info">
                    <div className="trending-card__price">
                        <CryptocurrencyColorBtc/>
                        {( price_btc && price_btc.toFixed(8)) || "no data" }
                    </div>
                    <div className="trending-card__mrkt-cap">
                        Mrkt Cap Rank : {market_cap_rank || '?'}
                    </div>
                    <div className="trending-card__score">
                        Score: {score}
                    </div>
                </div>
            </div>
         </Link>
    )
}

export default TrendingCard;