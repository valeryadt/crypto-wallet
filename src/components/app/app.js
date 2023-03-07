import './app.css'
import Header from "../header/header";
import Footer from "../footer/footer";
import { Routes, Route } from "react-router-dom"
import HomePage from "../../routes/home-page/home-page";
import axios from "axios";
import {useState, useEffect} from "react";
import Cryptocurrencies from "../cryptocurrencies/cryptocurrencies";
import CryptoNews from "../crypto-news/crypto-news";
import Authorization from "../authorization/authorization";
import Registration from "../registration/registration";
import Trending from "../trending/trending";

function App() {

    const [coins, setCoins] = useState([]);
    const [news, setNews] = useState([]);
    const [trending, setTrending] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true';
    const trendingUrl = 'https://api.coingecko.com/api/v3/search/trending'
    const options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {q: 'crypto', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off', originalImg: 'true'},
        headers: {
            'X-BingApis-SDK': 'true',
            'X-RapidAPI-Key': '96d03489camsh4c4b5faacb33544p192f4fjsn7743982491d8',
            'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })

        axios.request(options).then(function (response) {
            setNews(response.data);
        }).catch(function (error) {
            console.error(error, 'error');
        });

        axios.get(trendingUrl).then((response) => {
            setTrending(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="App">
            <Header />
            {/*<HomePage coins={coins} />*/}
            {/*<CryptoNews news={news} />*/}
            <Trending trending={trending} />
            {/*<Cryptocurrencies coins={coins} />*/}
            {/*<Registration />*/}
            {/*<Authorization />*/}
            <Footer/>
        </div>
    )
}

export default App;