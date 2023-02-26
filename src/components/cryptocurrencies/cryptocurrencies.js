import './cryptocurrencies.css';
import CoinItem from "./coin-item/coin-item";
import Fuse from 'fuse.js'
import {useEffect, useState} from "react";
function Cryptocurrencies(props) {

    const [coin, setCoin] = useState(props.coins);

    useEffect(() => {
        setCoin(props.coins);
    }, [props.coins])

    const searchData = (pattern) => {
        const fuse = new Fuse(coin, {
            keys: [
                'name',
                'symbol'
            ],
            includeScore: true
        })

        if (!pattern) {
            setCoin(props.coins);
            return;
        }

        const result = fuse.search(pattern);
        const matches = [];
        if (!result.length) {
            setCoin([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            setCoin(matches);
        }
    };

    return (
        <div className="cryptocurrencies">
            <div className="cryptocurrencies__container">
                <div className="cryptocurrencies__search">
                    <input
                        placeholder="Search crypto"
                        className="cryptocurrencies__input"
                        type="text"
                        onChange={(e) => searchData(e.target.value)}
                         />
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
                    {coin.map((coins, idx) => {
                        const {id} = coins
                        return (
                            <CoinItem {...coins} key={id} idx={idx} />
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Cryptocurrencies;