import './trending-item.css'
import axios from "axios"
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import BxLinkExternal from "./icones/BxLinkExternal";
import Btn from "../../../header/btn/btn";
import CarbonFavorite from "../../coin-item/CarbonFavorite";
import MaterialSymbolsNotificationsOutline from "./icones/MaterialSymbolsNotificationsOutline";
import MaterialSymbolsArrowDropUpSharp from "./icones/MaterialSymbolsArrowDropUpSharp";
import MaterialSymbolsArrowDropDownSharp from "./icones/MaterialSymbolsArrowDropDownSharp";
import {Link} from "react-router-dom";

function TrendingItem(props) {

    const [coins, setCoins] = useState([])
    const params = useParams()
    const [loading, setLoading] = useState(false)


    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

    const coinData = async () => {
        try {
            await axios.get(url)
                .then((response) => {
                    setCoins(response.data)
                })
            setLoading(true)
        } catch (error) {
            console.error(`ERROR:  ${error}`)
        }
    }

    console.log(coins)

    useEffect(() => {
        coinData()
        setLoading(false)
    }, [url])


    return (
        <div className="item__container">
            {loading ? (
                <div className="item">
                    <div className="flex flex-row gap-2 pb-4 font-semibold text-sm text-white/20">
                        <Link to="/cryptocurrencies">
                            <p>Trending ></p>
                        </Link>
                        <p className="text-white/40">{coins.name}</p>
                    </div>
                    <div className="item__panel">
                        <div className="item__info flex flex-col gap-4">
                            <div className="flex flex-row gap-4">
                                <div className="item__info-img">
                                    <img src={coins.image.small} alt="" className="item__img"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div
                                        className="item__info-container flex flex-row gap-2 items-center justify-start">
                                        <div className="item__info-name font-bold text-xl cursor-default">
                                            {coins.name}
                                        </div>
                                        <div
                                            className="item__info-symbol cursor-default bg-white/10 text-white/20 w-auto pl-1 pr-1 font-bold text-xs rounded-md text-center">
                                            {coins.symbol.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-1 justify-start items-center">
                                        <p className="text-white/20 font-semibold cursor-default">Official Website</p>
                                        <a href={coins.links.homepage[0]} className="item__info-link">
                                            <BxLinkExternal className="text-white/20 font-bold"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row gap-2 justify-start items-center">
                                    <div className="bg-white/10 w-auto p-1 font-bold text-xs rounded-md text-center">
                                        <p className="text-white/50">Rank #{coins.coingecko_rank || '?'}</p>
                                    </div>
                                    <div className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md text-center">
                                        <p className="text-white/50">Token</p>
                                    </div>
                                </div>
                                <div>
                                   Contracts: {coins.contract_address}
                                </div>
                            </div>
                        </div>
                        <div className="item__info-price flex flex-col justify-start gap-1 items-start">
                            <div className="font-bold"> {coins.name} Price ({coins.symbol.toUpperCase()})</div>
                            <div className="flex flex-row gap-2">
                                <div
                                    className="font-bold text-3xl">${coins.market_data.current_price.usd.toFixed(4)}</div>
                                <div className='flex flex-row justify-center items-center rounded-lg font-bold'>
                                    {coins.market_data?.price_change_percentage_24h > 0 ?
                                        <MaterialSymbolsArrowDropUpSharp className="text-2xl text-green-600"/> :
                                        <MaterialSymbolsArrowDropDownSharp className="text-2xl text-red-600"/>}
                                    <p className={coins.market_data?.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>{coins.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 font-semibold">
                                <div>High ${coins.market_data.high_24h.usd.toLocaleString()}</div>
                                <div>Low ${coins.market_data.low_24h.usd.toLocaleString()}</div>
                            </div>
                        </div>
                        <div className="item__info-actions flex flex-row gap-3 justify-start items-start">
                            <Btn text="Buy now" styling="login btn"/>
                            <div
                                className="cursor-pointer bg-white/10 rounded-full h-10 w-10 flex justify-center items-center">
                                <CarbonFavorite className="text-xl font-bold text-white/30"/>
                            </div>
                            <div
                                className="cursor-pointer bg-white/10 rounded-full h-10 w-10 flex justify-center items-center">
                                <MaterialSymbolsNotificationsOutline className="text-xl text-white/30"/>
                            </div>
                        </div>
                    </div>
                    <div className="item__description break-words text-justify w-full">
                        About
                        <p>{coins.description.en}</p>
                    </div>
                </div>
            ) : (
                <div>
                    not working
                </div>
            )}
        </div>
    )
}

export default TrendingItem;