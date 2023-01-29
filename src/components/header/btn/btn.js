import './btn.css'

function Btn({text, styling}) {
    return (
        <div>
            <button className={styling}>{text}</button>
        </div>
    )
}

export default Btn;