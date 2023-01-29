import './lang-togle.css';
import FlagUnitedKingdom from "../icones/FlagUnitedKingdom";
import ChevronDown from "../icones/ChevronDown";

function LangToggle({lang}) {
    return (
        <div className="toggle">
            <FlagUnitedKingdom/>
            <div className="toggle__lang">{lang}</div>
            <ChevronDown className="toggle__arrow"/>
        </div>
    )
}

export default LangToggle;