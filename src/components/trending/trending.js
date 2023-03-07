import './trending.css';
import TrendingCard from "./trending-card/trending-card";

function Trending(props) {
    return (
        <div className="trending">
            <div className="trending__container">
                <div className="trending__title">
                    Top Trending Cryptocurrencies Today
                </div>
                <div className="trending__description">
                    Discover the top trending cryptocurrencies on Finvers.
                    This list is sorted by coins that are most searched for in the last 3 hours.
                </div>
                <div className="trending__cards">
                    {props.trending.coins !== undefined && props.trending.coins.map((trending, idx) => {
                       return (
                        <TrendingCard {...trending} key={idx} />
                       )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Trending;