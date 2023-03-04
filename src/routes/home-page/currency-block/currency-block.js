import './currency-block.css'
import {Sparklines, SparklinesLine} from "react-sparklines";

function CurrencyBlock(props) {
    const {symbol, current_price, price_change_percentage_24h, sparkline_in_7d} = props.coins
    const {price} = sparkline_in_7d
    const change_color = symbol === 'btc' ? 'text-btc'
                                    : symbol === 'eth' ? 'text-eth'
                                    : 'text-usdt'
    const change_position = symbol === 'btc' ? 'crypto-balance__bitcoin-container'
                                    : symbol === 'eth' ? 'crypto-balance__ethereum-container'
                                    : 'crypto-balance__tether-container'
    const coinImg = symbol === 'btc' ? '/img/btc.png' : symbol === 'eth' ? '/img/eth.png' : "/img/usdt.png"
    const change_shadow = symbol === 'btc' ? 'shadow-amber-400' : symbol === 'eth' ? 'text-violet-300' : "text-teal-300"
    const cryptoBlock__imgContainer = 'crypto-block__img-container'

    return (
        <div className={change_position}>
        <div className="currency-block">
            <div className="crypto-block__sparkline">
                <Sparklines data={price} height={40} width={250} svgWidth={445} svgHeight={50} >
                    <SparklinesLine style={{ stroke: "#FFF", strokeWidth: "1", fill: "none" }} />
                </Sparklines>
            </div>
            <div className={[cryptoBlock__imgContainer, change_shadow].join(' ')}>
                <img src={coinImg} alt="" className="crypto-block__img"/>
            </div>
            <div className="crypto-balance">
                <div className="crypto-balance__revers-exchange">
                    <div className={change_color}>
                        {(1/current_price).toFixed(7)} {symbol.toUpperCase()}
                    </div>
                    <div>= $1</div>
                </div>
                <div className="crypto-balance__numbers">
                    <div className="crypto-balance__exchange">
                        <div className={change_color}>
                            1.00 {symbol.toUpperCase()}
                        </div>
                        = ${current_price.toLocaleString()}
                    </div>
                    <div className="crypto-balance__price-change">
                        <div className={change_color}>
                            {price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div>
                            24h
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CurrencyBlock;