import './btn.css'

function Btn({text, styling, link}) {
    return (
        <div>
            <button className={styling}><a href={link}>{text}</a></button>
        </div>
    )
}

export default Btn;