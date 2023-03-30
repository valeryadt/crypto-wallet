import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import {Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import {Bar} from "react-chartjs-2";
import axios from "axios"
import './trending-item.css'
import BxLinkExternal from "./icones/BxLinkExternal";
import Btn from "../../../header/btn/btn";
import CarbonFavorite from "../../coin-item/CarbonFavorite";
import MaterialSymbolsNotificationsOutline from "./icones/MaterialSymbolsNotificationsOutline";
import MaterialSymbolsArrowDropUpSharp from "./icones/MaterialSymbolsArrowDropUpSharp";
import MaterialSymbolsArrowDropDownSharp from "./icones/MaterialSymbolsArrowDropDownSharp";
import RadixIconsCopy from "./icones/RadixIconsCopy";
import BxsMessageRounded from "./icones/BxsMessageRounded";
import JamCode from "./icones/JamCode";
import CiSearchMagnifyingGlass from "./icones/CiSearchMagnifyingGlass";
import MaterialSymbolsForumOutline from "./icones/MaterialSymbolsForumOutline";
import IcRoundPerson from "./icones/IcRoundPerson";
import IconBxsUpArrow from "./icones/IconBxsUpArrow";
import RiTwitterFill from "./icones/RiTwitterFill";
import EiScTelegram from "../../../footer/icones/EiScTelegram";
import Loader from "../../../loader/loader";

function TrendingItem(props) {

    const [coins, setCoins] = useState([])
    const [open, setOpen] = useState(false)
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

    useEffect(() => {
        coinData()
        setLoading(false)
    }, [url])

    const openMenu = (e) => {
        setOpen(open => !open)
    }

    Chart.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )

    const slicedArray = coins.market_data?.sparkline_7d.price ? coins.market_data?.sparkline_7d.price.slice(coins.market_data?.sparkline_7d.price.length - 14) : null;

    const data = {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        datasets: [
            {
                label: coins.name,
                data: slicedArray || [1, 2, 3],
                backgroundColor: 'rgba(201, 203, 207, 0.2)',
                borderColor: 'rgb(201, 203, 207)',
                borderWidth: 1,
            },
        ]
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false,
                min: Number(Math.min(data.datasets[0].data)).toFixed(2),
                max: Number(Math.max(data.datasets[0].data)).toFixed(2)
            }
        },
    }

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
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-2 justify-start items-center">
                                    <div className="bg-white/10 w-auto p-1 font-bold text-xs rounded-md text-center">
                                        <p className="text-white/50">
                                            Rank #{coins.coingecko_rank || '?'}
                                        </p>
                                    </div>
                                    <div className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md text-center">
                                        <p className="text-white/50">
                                            Token
                                        </p>
                                    </div>
                                    <div className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md text-center">
                                        <p className="text-white/50">
                                            {coins.categories[0]}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="text-xs font-bold p-1">Links:</div>
                                    <div className="flex flex-wrap gap-2  max-w-xs">
                                        <div
                                            className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md flex flex-row gap-1 justify-center items-center">
                                            <JamCode className="text-white/60"/>
                                            <p className="text-white/50 cursor-pointer"
                                               href={coins.links.repos_url.github}>
                                                Source code
                                            </p>
                                            <BxLinkExternal className="text-white/60"/>
                                        </div>
                                        <div
                                            className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md flex flex-row gap-1 justify-center items-center">
                                            <BxsMessageRounded className="text-white/60"/>
                                            <p className="text-white/50 cursor-pointer" href={coins.links.chat_url}>
                                                Chat
                                            </p>
                                            <BxLinkExternal className="text-white/60"/>
                                        </div>
                                        <div
                                            className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md flex flex-row gap-1 justify-center items-center">
                                            <CiSearchMagnifyingGlass className="text-white/60"/>
                                            <a className="text-white/50 cursor-pointer"
                                               href={coins.links.blockchain_site}>
                                                Explorers
                                            </a>
                                            <BxLinkExternal className="text-white/60"/>
                                        </div>
                                        <div
                                            className="bg-white/20 w-auto p-1 font-bold text-xs rounded-md flex flex-row gap-1 justify-center items-center">
                                            <MaterialSymbolsForumOutline className="text-white/60"/>
                                            <a className="text-white/50 cursor-pointer"
                                               href={coins.links.official_forum_url[0]}>
                                                Forum
                                            </a>
                                            <BxLinkExternal className="text-white/60"/>
                                        </div>
                                        <div
                                            className="bg-white/20 w-auto p-1 relative font-bold text-xs rounded-md flex flex-col gap-1 justify-center items-center">
                                            <div className="flex flex-row gap-1 justify-center items-center">
                                                <IcRoundPerson className="text-white/60"/>
                                                <a className="text-white/50 cursor-pointer"
                                                   href={coins.links.official_forum_url[0]}>
                                                    Community
                                                </a>
                                                {open ? <MaterialSymbolsArrowDropUpSharp onClick={openMenu}
                                                                                         className="text-white/60 text-lg cursor-pointer"/> :
                                                    <MaterialSymbolsArrowDropDownSharp onClick={openMenu}
                                                                                       className="text-white/60 text-lg cursor-pointer"/>}
                                            </div>
                                            {open ?
                                                <div className="flex flex-col z-100 top-5 w-full absolute">
                                                    <div className="flex justify-center items-start">
                                                        <IconBxsUpArrow className="text-stone"/>
                                                    </div>
                                                    <div
                                                        className="bg-stone rounded-md shadow-lg shadow-black/30 divide-y divide-white/10">
                                                        <div className="text-white/50">
                                                            {coins.links.twitter_screen_name ?
                                                                (<div
                                                                    className="hover:text-white transition p-2 flex flex-row gap-1 items-center justify-start">
                                                                    <RiTwitterFill/> {coins.links.twitter_screen_name}
                                                                </div>) : null}
                                                        </div>
                                                        <div className="text-white/50">
                                                            {coins.links.telegram_channel_identifier ?
                                                                (<div
                                                                    className="hover:text-white text-xs transition p-2 flex flex-row gap-1 items-center justify-start">
                                                                    <EiScTelegram/> {coins.links.telegram_channel_identifier}
                                                                </div>) : null}
                                                        </div>
                                                    </div>
                                                </div> : null}
                                        </div>
                                    </div>

                                </div>
                                {coins.contract_address ? <div className="flex flex-col items-start">
                                    <div className="text-xs font-bold p-1">Contracts:</div>
                                    <div
                                        className="flex cursor-default bg-white/20 rounded-md text-white/50 flex-row gap-1 p-1 items-center justify-center text-xs font-bold">
                                        {coins.contract_address.slice(0, 7) + '...' + coins.contract_address.slice(35)}
                                        <RadixIconsCopy className="cursor-pointer"
                                                        onClick={() => navigator.clipboard.writeText(coins.contract_address)}/>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                        <div className="item__info-price flex flex-col justify-start gap-1 items-start">
                            <div className="font-bold"> {coins.name} Price ({coins.symbol.toUpperCase()})</div>
                            <div className="flex flex-row gap-2">
                                <div className="font-bold text-3xl">
                                    ${coins.market_data.current_price.usd.toLocaleString()}
                                </div>
                                <div className='flex flex-row justify-center items-center rounded-lg font-bold'>
                                    {coins.market_data?.price_change_percentage_24h > 0 ?
                                        <MaterialSymbolsArrowDropUpSharp className="text-2xl text-green-600"/> :
                                        <MaterialSymbolsArrowDropDownSharp className="text-2xl text-red-600"/>}
                                    <p className={coins.market_data?.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600'}>{coins.market_data?.price_change_percentage_24h.toFixed(2)}%</p>
                                </div>
                            </div>
                            <div className="text-left text-sm text-white/70">
                                <p>{coins.market_data?.current_price.btc} BTC</p>
                                <p>{coins.market_data?.current_price.eth} ETH</p>
                            </div>
                            <div className="flex flex-row gap-2 font-semibold">
                                High
                                <div className="text-green-600/80">
                                    ${coins.market_data.high_24h.usd.toLocaleString()}
                                </div>
                                Low
                                <div className="text-red-600/80">
                                    ${coins.market_data.low_24h.usd.toLocaleString()}
                                </div>
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
                    <div className="flex flex-row gap-2">
                        <div className="w-1/2">
                            {data ? (
                                <Bar data={data} options={options}></Bar>
                            ) : <Loader/>}
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 w-1/2">
                            <div className="border">d</div>
                            <div className="border">b</div>
                            <div className="border">e</div>
                            <div className="border">b</div>
                        </div>
                    </div>
                    <div className="item__description break-words text-justify w-full">
                        <h2 className="text-2xl font-extrabold">{coins.symbol.toUpperCase()} Price Live Data</h2>
                        <p>The live <b>{coins.name} price today</b> is ${coins.market_data.current_price.usd} USD with a 24-hour trading volume of $138 523 098 USD. We update our {coins.symbol.toUpperCase()} to USD price in real-time.
                            {coins.name} is down 3,06% in the last 24 hours. The current CoinMarketCap ranking is #330, with a live market cap of $73 274 271 USD. It has a circulating
                            supply of 179 395 529 {coins.symbol.toUpperCase()} coins and a max. supply of 1 000 000 000 {coins.symbol.toUpperCase()} coins. If you would like to know where to buy {coins.name} at the current rate, the
                            top cryptocurrency exchanges for trading in {coins.name} stock are currently Binance, OKX, Bybit, BTCEX, and CoinW. You can find others listed on our crypto
                            exchanges page.</p>
                    </div>
                    <div className="item__description break-words text-justify w-full">
                        <h2 className="text-2xl font-extrabold">About {coins.name} ({coins.symbol.toUpperCase()})</h2>
                        <p className="whitespace-pre-wrap pt-2 tracking-wide text-lg text-white/70">{coins.description.en}</p>
                    </div>
                </div>
            ) : (
                // <ErrorPage/>
                <div className="load">
                    <h1 className="font-semibold text-xl">Getting everything ready. Please be patient.</h1>
                    <Loader/>
                </div>
            )}
        </div>
    )
}

export default TrendingItem;