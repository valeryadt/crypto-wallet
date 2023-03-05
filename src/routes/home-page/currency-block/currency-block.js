import './currency-block.css'
import {Sparklines, SparklinesLine} from "react-sparklines";
import classNames from 'classnames';


function CurrencyBlock(props) {
    const {symbol, current_price, price_change_percentage_24h, sparkline_in_7d} = props.coins
    const {price} = sparkline_in_7d

    function getTextColorClass(currency) {
        if (currency === 'btc') {
            return 'text-btc'
        } else if (currency === 'eth') {
            return 'text-eth'
        } else {
            return 'text-usdt'
        }
    }
    function getCoinImgSource(currency) {
       if (currency === 'btc') {
           return '/img/btc.png'
       } else if (currency === 'eth') {
           return '/img/eth.png'
       } else {
           return '/img/usdt.png'
       }
    }
    function getCryptoBalanceContainerClass(currency) {
        if (currency === 'btc') {
            return 'crypto-balance__bitcoin-container'
        } else if (currency === 'eth') {
            return 'crypto-balance__ethereum-container'
        } else {
            return 'crypto-balance__tether-container'
        }
    }
    function getShadowClass(currency) {
        if (currency === 'btc') {
            return 'shadow-amber-300 shadow-5xl'
        } else if (currency === 'eth') {
            return 'shadow-violet-300 shadow-5xl'
        } else {
           return 'shadow-teal-300 shadow-5xl'
        }
    }

    return (
        <div className={getCryptoBalanceContainerClass(symbol)}>
        <div className="currency-block">
            <div className="crypto-block__sparkline">
                <Sparklines data={price} height={40} width={250} svgWidth={445} svgHeight={50} >
                    <SparklinesLine style={{ stroke: "#FFF", strokeWidth: "1", fill: "none" }} />
                </Sparklines>
            </div>
            <div className={classNames(getShadowClass(symbol), 'crypto-block__img-container')}>
                <img src={getCoinImgSource(symbol)} alt="" className="crypto-block__img"/>
            </div>
            <div className="crypto-balance">
                <div className="crypto-balance__revers-exchange">
                    <div className={getTextColorClass(symbol)}>
                        {(1/current_price).toFixed(7)} {symbol.toUpperCase()}
                    </div>
                    <div>= $1</div>
                </div>
                <div className="crypto-balance__numbers">
                    <div className="crypto-balance__exchange">
                        <div className={getTextColorClass(symbol)}>
                            1.00 {symbol.toUpperCase()}
                        </div>
                        = ${current_price.toLocaleString()}
                    </div>
                    <div className="crypto-balance__price-change">
                        <div className={getTextColorClass(symbol)}>
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