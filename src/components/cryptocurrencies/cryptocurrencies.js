import './cryptocurrencies.css';
import CoinItem from "./coin-item/coin-item";

function Cryptocurrencies(props) {
    return (
        <div className="cryptocurrencies">
            <div className="cryptocurrencies__container">
                <div className="cryptocurrencies__search">
                    <input placeholder="Search crypto" className="cryptocurrencies__input" />
                </div>
                <table className="cryptocurrencies__table">
                    <thead>
                    <tr className="cryptocurrencies__table-row">
                        <th className="empty-headline"></th>
                        <th className="numbering-headline">#</th>
                        <th className="coin-headline">Coin</th>
                        <th className="empty-headline"></th>
                        <th className="price-headline">Price</th>
                        <th className="24h-headline">24h</th>
                        <th className="volume-headline">Total Volume</th>
                        <th className="market-headline">Market Cap</th>
                        <th className="7d-headline">Last 7 days</th>
                    </tr>
                    </thead>
                    <tbody className="cryptocurrencies__table-body">
                         {props.coins.map((coins, idx) => {
                             const {id} = coins
                             return (
                                 <CoinItem key={id} coins={coins} idx={idx} />
                             )
                         })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cryptocurrencies;