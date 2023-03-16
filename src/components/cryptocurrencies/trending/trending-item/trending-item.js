import './trending-item.css'
import axios from "axios"
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';



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

    useEffect(() => {
        coinData()
        setLoading(false)
    }, [url])

    // console.log(coins.links.homepage[0])

    return (
        <div className="item__container">
            {loading ? (
                <div className="item">
                    <div className="item__info">
                        <div className="item__info-name">
                            {/*{coins.image.small}*/}
                            <img src={coins.image.small} alt=""/>
                            {coins.name}
                            {coins.symbol}
                            <a href={coins.links.homepage[0]}>link</a>
                        </div>
                        <div className="item__info-price"></div>
                        <div className="item__info-actions"></div>
                    </div>
                    <div className="item__description"></div>
                </div>
            ) : (
                <div>
                    not working
                </div>
            )}
            {/*{coins.market_data && (*/}
            {/*    <div className='grid gap-3 md:grid-cols-2 sm:grid-cols-1 mt-4'>*/}
            {/*        <div className='border-b'>*/}
            {/*            <h4 className='text-gray-500 dark:text-gray-400 text-sm'>Market Cap</h4>*/}
            {/*            <p className='font-semibold'>${coins.market_data.market_cap.usd.toLocaleString()}</p>*/}
            {/*        </div>*/}
            {/*        <div className='border-b'>*/}
            {/*            <h4 className='text-gray-500 dark:text-gray-400 text-sm'>24 Hour Trading Volume</h4>*/}
            {/*            <p className='font-semibold'>${coins.market_data.total_volume.usd.toLocaleString()}</p>*/}
            {/*        </div>*/}
            {/*        {coins.market_data.fully_diluted_valuation.usd &&*/}
            {/*            <div className='border-b'>*/}
            {/*                <h4 className='text-gray-500 dark:text-gray-400 text-sm'>Fully Diluted Valuation</h4>*/}
            {/*                <p className='font-semibold'>${coins.market_data.fully_diluted_valuation.usd.toLocaleString()}</p>*/}
            {/*            </div>*/}
            {/*        }*/}
            {/*        <div className='border-b'>*/}
            {/*            <h4 className='text-gray-500 dark:text-gray-400 text-sm'>Circulating Supply</h4>*/}
            {/*            <p className='font-semibold'>{coins.market_data.circulating_supply.toLocaleString()}</p>*/}
            {/*        </div>*/}
            {/*        <div className='border-b'>*/}
            {/*            <h4 className='text-gray-500 dark:text-gray-400 text-sm'>24h High</h4>*/}
            {/*            <p className='font-semibold'>${coins.market_data.high_24h.usd.toLocaleString()}</p>*/}
            {/*        </div>*/}
            {/*        <div className='border-b'>*/}
            {/*            <h4 className='text-gray-500 dark:text-gray-400 text-sm'>24h Low</h4>*/}
            {/*            <p className='font-semibold'>${coins.market_data.low_24h.usd.toLocaleString()}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
            {/*{loading && <div>*/}
            {/*    <h1 className='text-2xl font-semibold mt-8 mb-4'>About {coins.name} ({coins.symbol?.toUpperCase()})</h1>*/}
            {/*    <div className='about-text whitespace-pre-wrap tracking-wide' dangerouslySetInnerHTML={{__html: coins.description?.en}}></div>*/}
            {/*</div>}*/}
        </div>
    )
}

export default TrendingItem;