import './app.css'
import Header from "../header/header";
import Footer from "../footer/footer";
import HomePage from "../home-page/home-page";
import axios from "axios";
import {useState, useEffect} from "react";
import Cryptocurrencies from "../cryptocurrencies/cryptocurrencies";

function App() {

    const [coins, setCoins] = useState([]);
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true';

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
            {/*<HomePage/>*/ }
            <Cryptocurrencies coins={coins} />
            <Footer/>
        </div>
    )
}

export default App;