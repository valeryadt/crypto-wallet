import './logotype.css'
import SimpleLineIconsWallet from "../header/icones/SimpleLineIconsWallet";

function Logotype() {
    return (
        <div className="logo">
            <SimpleLineIconsWallet className="logo__icon"/>
            <div className="logo__name">Finvers</div>
        </div>
    )
}

export default Logotype;