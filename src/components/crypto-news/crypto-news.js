import './crypto-news.css'
import Card from "./card/card";

function CryptoNews(props) {
    return (
        <div className="cryptonews">
            <div className="cryptonews__container">
                <div className="cryptonews__title">
                    Crypto & Bitcoin News
                </div>
                <div className="cryptonews__description">
                     Find the latest cryptocurrency news, updates, values, prices, and more
                     related to Bitcoin, Ethereum, Dogecoin, DeFi and NFTs with Finvers
                     crypto topic page.
                </div>
                <div className="cryptonews__news">
                    {props.news.value !== undefined && props.news.value.map((news, index) => {
                        return (
                            <div>
                                <Card news={news} key={index} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CryptoNews;