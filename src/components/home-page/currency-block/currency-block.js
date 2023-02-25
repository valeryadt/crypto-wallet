import './currency-block.css'

function CurrencyBlock(name, balance, priceBtc, price, priceChange) {
    return (
        <div className="currency-block">
            <div className="crypto-balance"></div>
            <div className="crypto-course"></div>
        </div>
    )
}

export default CurrencyBlock;