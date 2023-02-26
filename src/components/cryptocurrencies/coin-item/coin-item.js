import './coin-item.css'
import CarbonFavorite from "./CarbonFavorite";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';


function CoinItem({name, symbol, image, current_price, price_change_percentage_24h, total_volume, market_cap, sparkline_in_7d, idx}) {
    const coin__price_change = price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500";
    return (
        <tr className="coin">
            <td className="coin__fav"><CarbonFavorite/></td>
            <td className="coin__numbering">{idx + 1}</td>
            <td className="coin__base-info">
                <div className="base-info__container">
                    <img className="coin__img" src={image} alt=""/>
                    <div className="coin__name">{name}</div>
                </div>
            </td>
            <td className="coin__symbol">
                {symbol.toUpperCase()}
            </td>
            <td className="coin__price">
                ${current_price}
            </td>
            <td className={coin__price_change}>
                {price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className="coin__total-volume">
                ${total_volume.toLocaleString()}
            </td>
            <td className="coin__market-cap">
                ${market_cap.toLocaleString()}
            </td>
            <td>
                <Sparklines data={sparkline_in_7d.price}>
                    <SparklinesLine color="white" />
                    <SparklinesReferenceLine type="median" />
                </Sparklines>
            </td>
        </tr>
    )
}

export default CoinItem;