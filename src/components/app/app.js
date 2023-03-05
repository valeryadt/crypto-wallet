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

function App() {

    const [coins, setCoins] = useState([]);
    const [news, setNews] = useState([])
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true';
    const urlNews = ''

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div className="App">
            <Header />
            {/*<Routes>*/}
            {/*<HomePage coins={coins} />*/}
            {/*<CryptoNews />*/}
            <Cryptocurrencies coins={coins} />
            {/*<Registration />*/}
            {/*<Authorization />*/}
            {/*</Routes>*/}
            <Footer/>
        </div>
    )
}

export default App;